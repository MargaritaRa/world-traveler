from flask import Flask, request, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import sqlalchemy
from flask_bcrypt import Bcrypt
import os


from models import db, User, Countries, Favorite

from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

bcrypt = Bcrypt(app)

migrate = Migrate(app, db)

db.init_app(app)

URL_PREFIX = '/api'

@app.post(URL_PREFIX + '/users')
def create_user():
    try:
        new_user = User(
            username = request.json['username'],
        )
        new_user._hashed_password = bcrypt.generate_password_hash(request.json['password']).decode('utf-8')
        db.session.add(new_user)
        db.session.commit()
        session["user_id"] = new_user.id
        return new_user.to_dict(), 201
    except Exception as e:
        return { 'error': str(e) }, 406

@app.delete(URL_PREFIX + '/users/<int:id>')
def delete_user_by_id(id):
    user = User.query.where(User.id == id).first()
    if user:
        db.session.delete(user)
        db.session.commit()
        return {}, 204
    else:
        return {'error': 'Not found'}, 404

#functions for checking session
@app.get(URL_PREFIX + "/check-session")
def check_session():
    user = User.query.where(User.id == session.get('user_id')).first()
    if user:
        return user.to_dict(), 200
    else:
        return {}, 204

@app.delete(URL_PREFIX + '/logout')
def logout():
    session.pop('user_id')
    return {}, 204

@app.get(URL_PREFIX+'/destinations')
def all_destinations():
    return [cont.to_dict() for cont in Countries.query.all()], 200

@app.get(URL_PREFIX + '/destinations/<int:id>')
def get_country(id):
    country = Countries.query.get_or_404(id)
    return jsonify({'id': country.id, 'name': country.name, 'continent': country.continent})

#Function for adding countries to favorites
@app.post(URL_PREFIX+'/favorites')
def post_contries_to_favorite():
    try:
        fav = Favorite(
            user_id = session.get('user_id'),
            country_id = request.json.get('country_id')
        )

        db.session.add(fav)
        db.session.commit()
        return fav.to_dict(), 201
    except sqlalchemy.exc.IntegrityError as error:
        return {"error": "Invalid data"}, 400
    except ValueError as error:
        return {"error": str(error)}
    

if __name__ == '__main__':
    app.run(port=5555, debug=True)