import db
from flask import Flask

app = Flask(__name__)

@app.route('/')
def flask_mongodb_atlas():
    return "flask mongodb atlas!"

@app.route("/test", methods=['POST', 'GET'])
def test():
    db.db.uofcc_users.insert_one({"name": "John"})
    return "Connected to the data base!"

if __name__ == '__main__':
    app.run(port=5000)