from src.Models import DelincuentsModel

class RegisterRequest(DelincuentsModel.DelincuentsModel):
    USERNAME: str
    EMAIL: str
    PASSWORD: str
    NAME: DelincuentsModel.Optional[str] = None