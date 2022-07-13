from models import db, Pet
from app import app


db.drop_all()
db.create_all()


pet1 = Pet(name="Toby", species="dog", available=True)
pet2 = Pet(name="Luca", species="cat", available=False)
pet3 = Pet(name="Ben", species="iguana", available=True)
pet4 = Pet(name="Isabelle", species="fish", available=False)

db.session.add_all([pet1,pet2,pet3,pet4])
db.session.commit()