import DelincuentsRepository

class PlantRepository(DelincuentsRepository.DelincuentsRepository):
    def existsPlant(self, id):
        self.connect()
        sql = "SELECT 1 FROM Plant WHERE id = %s;"
        self.cursor.execute(sql, (id))
        result = self.cursor.fetchone()
        self.disconnect()
        return result