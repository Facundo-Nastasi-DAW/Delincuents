from src.Repository import DelincuentsRepository

class UserRepository(DelincuentsRepository.DelincuentsRepository):
    def existsUsername(self, username):
        self.connect()
        sql = "Select 1 from user where username = %s;"
        self.cursor.execute(sql, (username,))
        result = self.cursor.fetchone()
        self.disconnect()
        return result

    def register(self, username, email, pwd, name):
        self.connect()
        sql = "INSERT INTO User (username, email, password, name) VALUES (%s, %s, %s, %s);"
        self.cursor.execute(sql, (username, email, pwd, name,))
        self.disconnect()
        return
    
    def getPassword(self, username):
        self.connect()
        sql = "Select password from user where username = %s;"
        self.cursor.execute(sql, (username,))
        result = self.cursor.fetchone()
        self.disconnect()
        return result['password']
    
    def getId(self, username):
        self.connect()
        sql = "Select id from user where username = %s;"
        self.cursor.execute(sql, (username,))
        result = self.cursor.fetchone()
        self.disconnect()
        return result['id']
    
    def getUserById(self, id):
        self.connect()
        sql = "Select * from user where id = %s;"
        self.cursor.execute(sql, (id,))
        result = self.cursor.fetchone()
        self.disconnect()
        return result