from cryptography.hazmat.primitives.kdf.scrypt import Scrypt
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from fastapi import Depends, HTTPException, status
from datetime import datetime, timedelta, timezone
from typing import Optional
import math

class SecurityService(object):
    SECRET_KEY = "x7I!ik#iZqkDyi7KLqg!zAB!m"
    ALGORITHM = "HS256"
    OAUTH2_SCHEME = OAuth2PasswordBearer(tokenUrl="token")
    SALT = bytes.fromhex("9f86d081884c7d659a2feaa0c55ad015")
    N = 2**14
    R = 8
    P = 1
    LENGTH = 64
    
    def create_access_token(self, data: dict, expires_delta: Optional[timedelta] = None):
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.now(timezone.utc) + expires_delta
        else:
            expire = datetime.now(timezone.utc) + timedelta(minutes=120)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, self.SECRET_KEY, algorithm=self.ALGORITHM)

        return encoded_jwt
    
    def verify_token(self, token: str = Depends(OAUTH2_SCHEME)):
        try:
            payload = jwt.decode(token, self.SECRET_KEY, algorithms=[self.ALGORITHM])
            userId = int(payload.get("sub"))
            if userId is None:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Invalid token",
                    headers={"WWW-Authenticate": "Bearer"},
                )
            return userId
        except JWTError as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token",
                headers={"WWW-Authenticate": "Bearer"},
            )
    
    def pwdMatches(self, attempt:str, stored:str):
        try:
            attempt_bytes = attempt.encode('utf-8')

            deriver = Scrypt(
                salt = self.SALT,
                n = self.N,
                r = self.R,
                p = self.P,
                length = self.LENGTH 
            )
            
            derived_attempt = deriver.derive(attempt_bytes).hex()
            
            return derived_attempt == stored
        except Exception as e:
            raise e