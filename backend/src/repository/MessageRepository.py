import DelincuentsRepository

class MessageRepository(DelincuentsRepository.DelincuentsRepository):
    def postMessage(
            self,
            body,
            likes,
            dislikes,
            createdAt,
            writer,
            parentThread,
            childThread,
            plant
    ):
        self.connect()
        sql = "INSERT INTO Message (body, likes, dislikes, created_at, writer, parent_thread, child_thread, plant) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        self.cursor.execute(sql, (
            body,
            likes,
            dislikes,
            createdAt,
            writer,
            parentThread,
            childThread,
            plant
        ))
        self.disconnect()
        return

    def getMessagesFromPlant(self, plantId):
        self.connect()
        sql = "SELECT body, likes, dislikes, created_at, writer, parent_thread, child_thread FROM Message where plant_id = %s"
        self.cursor.execute(sql, (plantId))
        result = self.cursor.fetchall()
        self.disconnect()
        return result