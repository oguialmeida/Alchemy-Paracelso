from flask import Flask
from routes import data_routes, balanceamento_routes, classify_routes

app = Flask(__name__)

# Register routes
app.register_blueprint(data_routes)
app.register_blueprint(balanceamento_routes)
app.register_blueprint(classify_routes)

if __name__ == '__main__':
    app.run()
