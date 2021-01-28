from flask import Flask
from flask_pymongo import pymongo
from app import app

from dotenv import load_dotenv

# py-dotenv 0.1
# https://pypi.org/project/py-dotenv/
import os
from py_dotenv import read_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
read_dotenv(dotenv_path)

CONNECTION_STRING = os.getenv('MONGODB_URI')
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database(os.getenv('MONGODB_DB'))
user_collection = pymongo.collection.Collection(db, os.getenv('MONGODB_COLLECTION'))
