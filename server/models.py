from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):

    __tablename__ = 'users_table'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    _hashed_password = db.Column(db.String, nullable=False)

    favorites = db.relationship('Favorite', back_populates='user')

    country_names = association_proxy('favorites', 'countries')

    serialize_rules = ('-favorites.user',)

    @validates('username')
    def validate_username(self, key, value):
        user = User.query.where(User.username == value).first()
        if value and len(value.strip().replace(' ', '_')) < 4:
            raise ValueError('Username must be greater than or equal to 4 characters')
        if user:
            raise ValueError('Username must be unique!')
        return value.strip().replace(' ', '_')
    
    @validates('_hashed_password')
    def validate_password(self, key, value):
        if len(value) < 6:
            raise ValueError('Password must be at least 6 characters long!')
        return value


class Countries(db.Model, SerializerMixin):

    __tablename__ = 'countries_table'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    continent = db.Column(db.String)
    image = db.Column(db.String)
    currency = db.Column(db.String)
    language = db.Column(db.String)
    mannerism = db.Column(db.String)
    visa = db.Column(db.String)
    tipping = db.Column(db.String)
    when = db.Column(db.String)
    links = db.Column(db.String)
    phrases = db.Column(db.String)
    foods = db.Column(db.String)

    favorites = db.relationship('Favorite', back_populates='countries')

    serialize_rules = ('-favorites', '-user',)

class Favorite(db.Model, SerializerMixin):

    __tablename__ = 'favorites_table'

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey('users_table.id'))
    country_id = db.Column(db.Integer, db.ForeignKey('countries_table.id'))

    countries = db.relationship('Countries', back_populates='favorites')
    user = db.relationship('User', back_populates='favorites')

    serialize_rules = ('-favorites.user', '-favorites.countries',)
    