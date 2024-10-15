from flask import Flask, request, session, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import joinedload
from flask_migrate import Migrate
from flask_cors import CORS
import sqlalchemy
from flask_bcrypt import Bcrypt
import os


from models import db, User, Countries, Favorite, NewsLetter, Photo, Like, Comment

from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.config['UPLOAD_FOLDER'] = 'uploads/'

CORS(app)

bcrypt = Bcrypt(app)
migrate = Migrate(app, db)

db.init_app(app)

URL_PREFIX = '/api'

# Users routes #

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
        favorites = [fav.to_dict() for fav in user.favorites]
        return {'user': user.to_dict(), 'favorites': favorites}, 200
    else:
        return {}, 204
        
@app.post(URL_PREFIX + '/login')
def login():
    user = User.query.where(User.username == request.json.get('username')).first()
    if user and bcrypt.check_password_hash(user._hashed_password, request.json.get('password')):
        session['user_id'] = user.id
        return user.to_dict(), 201
    else:
        return {'error': 'username or password was invalid'}, 401

@app.delete(URL_PREFIX + '/logout')
def logout():
    session.pop('user_id')
    return {}, 204

# Newsletter #
@app.get(URL_PREFIX + '/newsletter')
def all_newsletters():
    return [news.to_dict() for news in NewsLetter.query.all()], 200

@app.post('/api/newsletter/<int:id>/like')
def like_newsletter(id):
    newsletter = NewsLetter.query.get_or_404(id)
    newsletter.likes += 1
    db.session.commit()
    return jsonify({'likes': newsletter.likes})


#  Destination/Country cards routes #

@app.get(URL_PREFIX + '/destinations')
def all_destinations():
    return [cont.to_dict() for cont in Countries.query.all()], 200

@app.get(URL_PREFIX + '/destinations/<int:id>')
def get_country(id):
    country = Countries.query.get_or_404(id)
    return jsonify({'id': country.id, 'name': country.name, 'continent': country.continent, 'image ': country.image,'currency': country.currency,'language': country.language,'mannerism': country.mannerism,'visa': country.visa,'tipping': country.tipping,'when': country.when,'links': country.links,'phrases': country.phrases,'foods': country.foods})

#  Favorite routes #

#function for getting all countries pertaining to a specific user
@app.get(URL_PREFIX + '/favorites')
def fav_items_by_user_id():
    # user_fav = Favorite.query.where(Favorite.user_id == id).first()
    user_fav = Favorite.query.where(Favorite.user_id == session.get('user_id')).all()
    if user_fav:
        return [fav.to_dict() for fav in user_fav], 200
    else:
        return {'error': 'Not found'}, 404

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
    
#function for deleting countries from the users favorites
@app.delete(URL_PREFIX + '/favorites/<int:id>')
def delete_fav_item(id):
    fav_item = Favorite.query.where(Favorite.id == id).first()
    if fav_item:
        db.session.delete(fav_item)
        db.session.commit()
        return {}, 204
    else:
        return {'error': 'Not found'}, 404

@app.patch(URL_PREFIX + '/favorites/<int:id>')
def update_favorite_notes(id):
    favorite = Favorite.query.get(id)
    
    if favorite:
        for key in request.json.keys():
            setattr(favorite, key, request.json[key])
        try:
            db.session.add(favorite)
            db.session.commit()
            return favorite.to_dict(), 202
        except Exception as e:
            return {'error': 'Failed to update favorite notes'}, 500
    else:
        return {'error': 'Favorite not found'}, 404
    
# Photo feature and upload

# List Photos Route
@app.get('/api/photos')
def list_photos():
    photos = Photo.query.all()
    return [photo.to_dict() for photo in photos], 200       

#  photos by username id
@app.route('/api/photos/<int:photo_id>', methods=['GET'])
def get_photo_with_comments(photo_id):
    photo = Photo.query.filter_by(id=photo_id).first()
    if not photo:
        return jsonify({'error': 'Photo not found'}), 404
    
    comments = [
        {
            'id': comment.id,
            'content': comment.content,
            'created_at': comment.created_at,
            'user': {
                'username': comment.user.username if comment.user else 'Unknown'
            }
        }
        for comment in photo.comments
    ]

    return jsonify({
        'id': photo.id,
        'photo_url': photo.image,
        'caption': photo.caption,
        'comments': comments
    })


# File Upload Route
@app.post('/api/photos/upload')
def upload_photo():
    if 'file' not in request.files:
        return {'error': 'No file provided'}, 400
    file = request.files['file']
    if file.filename == '':
        return {'error': 'No selected file'}, 400
    
    # Save the file locally
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)

    # Create a Photo entry in the database
    new_photo = Photo(user_id=session.get('user_id'), file_path=file_path)
    db.session.add(new_photo)
    db.session.commit()

    return new_photo.to_dict(), 201

# Like a photo
@app.post(URL_PREFIX + '/photos/<int:photo_id>/like')
def like_photo(photo_id):
    photo = Photo.query.get_or_404(photo_id)
    existing_like = Like.query.filter_by(user_id=session.get('user_id'), photo_id=photo_id).first()

    if existing_like:
        return {'error': 'Already liked'}, 400

    new_like = Like(user_id=session.get('user_id'), photo_id=photo_id)
    db.session.add(new_like)
    db.session.commit()
    return new_like.to_dict(), 201

# Comment on a photo
@app.post(URL_PREFIX + '/photos/<int:photo_id>/comment')
def comment_on_photo(photo_id):
    content = request.json['content']
    print(f'Received comment for Photo ID {photo_id}: {content}')  # Log incoming comment
    photo = Photo.query.get_or_404(photo_id)
    
    new_comment = Comment(
        user_id=session.get('user_id'),
        photo_id=photo_id,
        content=content
    )
    
    db.session.add(new_comment)
    db.session.commit()
    
    # Log the newly created comment
    print(f'Created comment: {new_comment.to_dict()}')
    
    return new_comment.to_dict(), 201





if __name__ == '__main__':
    app.run(port=5555, debug=True)