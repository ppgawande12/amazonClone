from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS  

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)
app = Flask(__name__)

# Configure MongoDB
app.config['MONGO_URI'] = 'mongodb://localhost:27017/amazonclone'
mongo = PyMongo(app)

# User collection in MongoDB
users = mongo.db.users



@app.route('/')
def home():
    return "server started"

@app.route("/signup", methods=["POST"])
def signup():
  email = request.json["email"]
  password = request.json["password"]

  # Check if the email address is already registered.
  if User.query.filter_by(email=email).first():
    return jsonify({"error": "Email address already registered"}), 400

  # Create a new user and save it to the database.
  user = User(email=email, password=password)
  user.save()

  # Return a success message.
  return jsonify({"message": "User successfully created"}), 200


if __name__ == '__main__':
    app.run(debug=True)
