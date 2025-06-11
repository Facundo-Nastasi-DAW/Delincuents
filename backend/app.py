from fastapi import FastAPI, Request, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from src.Models import RegisterRequest, LoginRequest
from src.Repository import UserRepository
from src.Security.SecurityService import SecurityService

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

userRepository = UserRepository.UserRepository()
securityService = SecurityService()

#End-point to registry
@app.post('/register')
def register(request: RegisterRequest.RegisterRequest):
    if userRepository.existsUsername(request.USERNAME):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Username already exists"
        )
    
    encryptedPwd = securityService.encrypt(request.PASSWORD)

    userRepository.register(
        request.USERNAME,
        request.EMAIL,
        encryptedPwd,
        request.NAME
    )

    return

#End-point to login
@app.post('/login')
def login(request: LoginRequest.LoginRequest):
    if not userRepository.existsUsername(request.USERNAME):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User doesn't exist"
        )
    
    storedPwd = userRepository.getPassword(request.USERNAME)
    if not storedPwd == securityService.encrypt(request.PASSWORD):
        raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect password"
            )
    
    userId = userRepository.getId(request.USERNAME)
    token = securityService.create_access_token({"id": userId})
    userData = userRepository.getUserById(userId)
    user = {
        "token": token,
        "name": userData.get("name", userData["username"])
    }

    return user