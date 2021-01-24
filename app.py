import db
from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def flask_mongodb_atlas():
    return "flask mongodb atlas!"

@app.route("/test/", methods=['POST', 'GET'])
def test():
    r = request.args
    print('request:', r)
    db.db.user_collection.insert_one({ "survey":r})
    return "Connected to the data base!"

if __name__ == '__main__':
    app.run(port=5000)