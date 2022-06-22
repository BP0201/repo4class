"""Models for Blogly."""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


class User(db.Model):
    """Docstring"""
    __tablename__ = 'users'

    def __repr__(self):
        u = self
        return f"<User id = {u.id}, first = {u.first_name}, last = {u.last_name}, image = {u.image_url}"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    first_name = db.Column(db.String(16), nullable=False, unique=True)

    last_name = db.Column(db.String(16), nullable=False, unique=True)

    image_url = db.Column(db.String(999), default='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxUpHaEGej6UaW1kltiUkhvNCkoVSYWuSew&usqp=CAU')

