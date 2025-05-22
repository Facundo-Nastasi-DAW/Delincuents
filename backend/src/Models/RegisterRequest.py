import DelincuentsModel

class RegisterRequest(DelincuentsModel.DelincuentsModel):
    USERNAME: str
    PASSWORD: str
    NAME: DelincuentsModel.Optional[str] = None
    PFP: DelincuentsModel.Optional[str] = None