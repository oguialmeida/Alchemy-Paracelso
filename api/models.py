import sqlite3
from sklearn.svm import LinearSVC

class Data:
    def __init__(self):
        self.conn = sqlite3.connect('database.db')
        
        self.conn.execute('''CREATE TABLE IF NOT EXISTS database
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                 tipo TEXT,
                 elementos TEXT,
                 formula TEXT)''')
    
    def get_data(self):
        cursor = self.conn.execute("SELECT * FROM data")
        columns = [column[0] for column in cursor.description]
        rows = cursor.fetchall()
        data = [dict(zip(columns, row)) for row in rows]
        return data
    
    def add_data(self, tipo, elementos, formula):
        self.conn.execute("INSERT INTO data (tipo, elementos, formula) VALUES (?, ?, ?)",
                          (tipo, elementos, formula))
        self.conn.commit()
    
    def update_data(self, index, tipo, elementos, formula):
        self.conn.execute("UPDATE data SET tipo = ?, elementos = ?, formula = ? WHERE id = ?",
                          (tipo, elementos, formula, index))
        self.conn.commit()
    
    def delete_data(self, index):
        self.conn.execute("DELETE FROM data WHERE id = ?", (index,))
        self.conn.commit()

class Model:
    def __init__(self):
        self.model = LinearSVC()
    
    def train_model(self, x, y):
        self.model.fit(x, y)
    
    def predict(self, x):
        return self.model.predict(x)
