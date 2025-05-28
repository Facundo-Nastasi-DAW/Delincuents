from fastapi import FastAPI, Request, Depends, HTTPException, status
from Models import RegisterRequest, LoginRequest, MessageRequest
from Repository import UserRepository, MessageRepository, PlantRepository
from Security.SecurityService import SecurityService
from datetime import datetime

app = FastAPI()

userRepository = UserRepository.UserRepository
messageRepository = MessageRepository.MessageRepository
plantRepository = PlantRepository.PlantRepository

#End-point to registry
@app.post('/register')
def register(request: RegisterRequest.RegisterRequest):
    if userRepository.existsUsername(request.USERNAME):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Username already exists"
        )
    
    encryptedPwd = SecurityService.encrypy(request.PASSWORD)

    userRepository.register(
        request.USERNAME,
        encryptedPwd,
        request.PFP,
        request.NAME
    )

    loginRequest = LoginRequest(USERNAME=request.USERNAME, PASSWORD=request.PASSWORD)
    return login(loginRequest)

#End-point to login
@app.post('/login')
def login(request: LoginRequest.LoginRequest):
    if not userRepository.existsUsername(request.USERNAME):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User doesn't exist"
        )
    
    storedPwd = userRepository.getPassword(request.USERNAME)
    if not storedPwd == SecurityService.encrypt(request.PASSWORD):
        raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect password"
            )
    
    userId = userRepository.getId(request.USERNAME)
    token = SecurityService.create_access_token({"id": userId})
    userData = userRepository.getUserById(userId)
    user = {
        "token": token,
        "name": userData.get("name", userData["username"]),
        "profile_picture": userData.get("profile_picture")
    }

    return user

#End-point to post a message
@app.post('/post-message')
def postMessage(request: MessageRequest.MessageRequest):
    cratedAt = datetime.now().strftime("%d/%m/%Y %H:%M")
    try:
        messageRepository.postMessage(
            request.BODY,
            request.LIKES,
            request.DISLIKES,
            cratedAt,
            request.WRITER,
            request.PARENT_THREAD,
            request.CHILD_THREAD,
            request.PLANT
        )
    except Exception as e:
        raise e
    
#End-point to get all messages from a thread
@app.get('/get-messages/{plantId}')
def getMessages(plantId: int):
    if not plantRepository.existsPlant(plantId):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Plant doesn't exist"
        )
    return messageRepository.getMessagesFromPlant(plantId)