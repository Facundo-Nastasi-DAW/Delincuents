from src.Repository import DelincuentsRepository

class UserRepository(DelincuentsRepository.DelincuentsRepository):
    def existsUsername(self, username):
        self.connect()
        sql = "Select 1 from user where username = %s;"
        self.cursor.execute(sql, (username))
        result = self.cursor.fetchone()
        self.disconnect()
        return result

    def register(self, username, pwd, pfp, name):
        self.connect()
        sql = "INSERT INTO User (username, password, profile_picture, name) VALUES (%s, %s, %s, %s);"
        self.cursor.execute(sql, (username, pwd, pfp, name))
        self.disconnect()
        return
    
    def getPassword(self, username):
        self.connect()
        sql = "Select password from user where username = %s;"
        self.cursor.execute(sql, (username))
        result = self.cursor.fetchone()
        self.disconnect()
        return result
    
    def getId(self, username):
        self.connect()
        sql = "Select id from user where username = %s;"
        self.cursor.execute(sql, (username))
        result = self.cursor.fetchone()
        self.disconnect()
        return result
    
    def getUserById(self, id):
        self.connect()
        sql = "Select * from user where id = %s;"
        self.cursor.execute(sql, (id))
        result = self.cursor.fetchall()
        self.disconnect()
        return result