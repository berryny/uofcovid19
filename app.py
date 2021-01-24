import db
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def flask_mongodb_atlas():
    return "flask mongodb atlas!"

@app.route("/checkin", methods=['POST', 'GET'])
def checkin():
    print('enter', request.form, request.args)
    data = request.form
    print('data', data)
    db.db.user_collection.insert_one({"survey": data})
    # db.db.user_collection.insert_one({"survey": "girl"})

if __name__ == '__main__':
    app.run(port=5000)