from fastapi import FastAPI, Request, Depends, HTTPException, status
from Models import RegisterRequest
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

    # return login(request.USERNAME, request.PASSWORD) TODO descomentar cuando este hecho el login