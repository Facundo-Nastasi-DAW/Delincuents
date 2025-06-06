import pymysql.cursors, json
from datetime import datetime

with open('envConfig.json', 'r', encoding='utf-8') as file:
    env = json.load(file)['pp']

class DelincuentsRepository(object):
    def connect(self):
        self.db = pymysql.connect(host=env['DB_HOST'],
                                     user=env['DB_USER'],
                                     passwd=env['DB_PASSWORD'],
                                     port=env['DB_PORT'],
                                     db=env['DB_NAME'],
                                     charset='utf8mb4',
                                     autocommit=True,
                                     cursorclass=pymysql.cursors.DictCursor)
        self.cursor = self.db.cursor()

    def disconnect(self):
        self.db.close()
        