from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
import jwt

app = Flask(__name__)
CORS(app)

app.config['MONGO_URI'] = 'mongodb://localhost:27017/amazonclone'
mongo = PyMongo(app)
bcrypt = Bcrypt(app)

# Signup
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    user = {
        'name': name,
        'email': email,
        'password': hashed_password
    }

    try:
        mongo.db.users.insert_one(user)
        return jsonify({'message': 'User created successfully'}), 201
    except Exception as e:
        print(e)
        return jsonify({'error': 'Internal Server Error'}), 500

# Login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = mongo.db.users.find_one({'email': email})

    if not user:
        return jsonify({'error': 'Invalid email or password'}), 401

    if not bcrypt.check_password_hash(user['password'], password):
        return jsonify({'error': 'Invalid email or password'}), 401

    token = jwt.encode({'email': user['email']}, 'secret_key', algorithm='HS256')

    return jsonify({'token': token})

if __name__ == '__main__':
    app.run(debug=True)
