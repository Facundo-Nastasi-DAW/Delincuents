from src.Models import DelincuentsModel

class LoginRequest(DelincuentsModel.DelincuentsModel):
    USERNAME: str
    PASSWORD: str