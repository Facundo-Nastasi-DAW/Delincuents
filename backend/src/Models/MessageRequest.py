import DelincuentsModel

class MessageRequest(DelincuentsModel.DelincuentsModel):
    BODY: str
    LIKES: DelincuentsModel.Optional[int] = 0
    DISLIKES: DelincuentsModel.Optional[int] = 0
    WRITER: str
    PARENT_THREAD: str
    CHILD_THREAD: DelincuentsModel.Optional[str] = None
    PLANT: str