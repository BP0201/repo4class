from flask import Flask, render_template, redirect, request
from importlib_metadata import method_cache
from models import db, connect_db, Pet
from forms import PetForm


app = Flask(__name__)
app.config["SECRET_KEY"] = "oh-so-secret"
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adopt'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.route('/')
def show_home():
    pets = Pet.query.all()
    return render_template('home.html', pets=pets)


@app.route('/add', methods=["GET","POST"])
def handle_add_form():
    form = PetForm()

    if form.validate_on_submit():

        name = form.name.data
        species = form.species.data
        available = form.available.data
        photo_url = form.photo_url.data
        age = form.age.data
        notes = form.notes.data

        new_pet = Pet(name=name, species=species, available=available, photo_url=photo_url, age=age, notes=notes)
        db.session.add(new_pet)
        db.session.commit()

        return redirect('/')

    else:
        return render_template('new_pet_form.html', form=form)


@app.route('/<int:id>', methods=["GET", "POST"])
def show_pet_info(id):
    pet = Pet.query.get_or_404(id)
    form = PetForm(obj=pet)

    if form.validate_on_submit():

        pet.photo_url = form.photo_url.data
        pet.notes = form.notes.data
        pet.available = form.available.data
        
        db.session.commit()
        return redirect('/')

    else:
        return render_template('pet_info.html', pet=pet, form=form)
