import db
from flask import Flask, request, jsonify
import requests

app = Flask(__name__, static_folder="./build", static_url_path='/')

# create the same react router path in switch/route
@app.route('/')
@app.route('/about')
@app.route('/profile')
@app.route('/login')
@app.route('/register')
@app.route('/contact')
def index():
    # create an alias
    return app.send_static_file('index.html')

@app.route('/survey')
def survey():
    # create an alias
    return app.send_static_file('index.html')

# To get the application deployed add /api/ to differentiate betwen the front-end and back-end URL structure
# the /api will act as a namespace to separate what are the front-end and back-end routes
@app.route("/api/checkin", methods=['POST', 'GET'])
def checkin():
    print('enter', request.form, request.args)
    data = request.form
    print('data', data)
    db.db.user_collection.insert_one({"survey": data})
    # db.db.user_collection.insert_one({"survey": "girl"})

if __name__ == '__main__':
    app.run(port=5000)