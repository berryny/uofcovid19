import db
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
# app.config['MONGO_URI']='mongodb://localhost/pythonreactdb'
# PyMongo(app)

# db = mongo.db.users

@app.route('/')
def flask_mongodb_atlas():
    return "flask mongodb atlas!"

@app.route("/users/", methods=['POST'])
def createUser():
    print(request.json)
    id = db.db.user_collection.insert({
        firstname: request.json['fname'],
        lastname: request.json['lname']
    })
    print(str(Object(id)))
    # return "flask mongodb connected!"
    return jsonify(Object(id))

if __name__ == '__main__':
    app.run(port=5000, debug=True)