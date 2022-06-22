"""Blogly application."""
from flask import Flask, render_template, redirect, request
from models import db, connect_db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.route('/')
def redirect_users():
    return redirect('/users')

@app.route('/users')
def show_home():
    """Show home page."""
    users = User.query.all()
    return render_template('home.html', users=users)

@app.route('/users/<int:user_id>')
def show_user_info(user_id):
    """Display info about a user."""
    user = User.query.get_or_404(user_id)
    return render_template('info.html', user=user)

@app.route('/users/new')
def show_create_form():
    return render_template('new.html')


@app.route('/users/<int:user_id>/edit')
def show_edit_page(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('edit.html', user=user)


@app.route('/users/new', methods=["POST"])
def create_user():
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    image_url = request.form["image_url"]

    new_user  = User(first_name=first_name, last_name=last_name, image_url=image_url)
    db.session.add(new_user)
    db.session.commit()

    return redirect('/users')


@app.route('/users/<int:user_id>/edit', methods=['POST'])
def edit_user(user_id):

    user = User.query.filter_by(id=user_id).first()
    new_first = request.form['new_first_name']
    new_last = request.form['new_last_name']
    new_image = request.form['new_image_url']

    user.first_name = new_first
    user.last_name = new_last
    user.image_url = new_image

    db.session.add(user)
    db.session.commit()

    return redirect('/users')


@app.route('/users/<int:user_id>/delete')
def delete_user(user_id):
    User.query.filter_by(id=user_id).delete()
    db.session.commit()


    return redirect('/users')


