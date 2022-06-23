"""Models for Blogly."""
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


class User(db.Model):
    """Docstring"""
    __tablename__ = 'users'

    def __repr__(self):
        u = self
        return f"<User id = {u.id}, first = {u.first_name}, last = {u.last_name}"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    first_name = db.Column(db.String(16), nullable=False, unique=True)

    last_name = db.Column(db.String(16), nullable=False, unique=True)

    image_url = db.Column(db.Text, default='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxUpHaEGej6UaW1kltiUkhvNCkoVSYWuSew&usqp=CAU')

    post = db.relationship('Post', backref='users')


class Post(db.Model):
    """Docstring"""
    __tablename__ = 'posts'

    def __repr__(self):
        p = self
        return f"<Post id = {p.id}, title = {p.title}, content = {p.content}, created_at = {p.created_at}, user_id = {p.user_id}"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.Text, nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))