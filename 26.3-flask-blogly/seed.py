from models import db, User, Post, Tag, PostTag
from app import app
from datetime import datetime

#Create all tables
db.drop_all()
db.create_all()

user1 = User(first_name='Luca', last_name='Rains')
user2 = User(first_name='Flynn', last_name='Rider')
user3 = User(first_name='Kat', last_name='Doug')
user4 = User(first_name='Curious', last_name='George')

post1 = Post(title='First post', content='Hello all', created_at=datetime(2022, 6, 5, 8, 10, 10, 10), user_id=1)
post2 = Post(title='Hello world', content='Hi world', created_at=datetime(2022, 6, 5, 8, 10, 10, 10), user_id=2)
post3 = Post(title='Third post!', content='3333333333', created_at=datetime(2022, 6, 5, 8, 10, 10, 10), user_id=3)
post4 = Post(title='Welcome to Blogly', content='Goodbye Blogly', created_at=datetime(2022, 6, 5, 8, 10, 10, 10), user_id=4)

db.session.add_all([user1,user2,user3,user4])
db.session.commit()

db.session.add_all([post1,post2,post3,post4])
db.session.commit()


tag1 = Tag(name='Fun')
tag2 = Tag(name='Even more')
tag3 = Tag(name='Bloop')
tag4 = Tag(name='Ridiculousness')
tag5 = Tag(name='Misc')

db.session.add_all([tag1,tag2,tag3,tag4,tag5])
db.session.commit()