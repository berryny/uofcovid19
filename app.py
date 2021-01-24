# import db
from flask import Flask, request
from flask_pymongo import PyMongo

app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
# mongo = PyMongo(app)

@app.route("/test", methods=['POST'])
def test():
    db.db.collection.insert_one({"name": "John"})
    return "Connected to the data base!"

# @app.route("/users", methods=['GET'])
# def sendingreqtdata():
#     everything = db.userCollection.find()
#     print(everything)
    
#     output = []
#     for s in  everything:
#         output.append({'resume' : s['resume'], 'summary' : s['summary']})

#     return jsonify({'result' : output})

if __name__ == '__main__':
    app.run(port=5000)