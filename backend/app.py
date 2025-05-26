from fastapi import FastAPI, Request, Depends, HTTPException, status
from Models import RegisterRequest, LoginRequest
from Repository import UserRepository
from Security.SecurityService import SecurityService

app = FastAPI()

userRepository = UserRepository.UserRepository

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