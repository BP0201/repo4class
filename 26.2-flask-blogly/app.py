"""Blogly application."""
from crypt import methods
from flask import Flask, render_template, redirect, request
from importlib_metadata import method_cache
from models import db, connect_db, User, Post

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

    posts = Post.query.filter_by(user_id=user_id)



    return render_template('info.html', user=user, posts=posts)

@app.route('/users/new')
def show_create_form():
    return render_template('new.html')


@app.route('/users/<int:user_id>/edit')
def show_edit_page(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('edit.html', user=user)


@app.route('/users/new', methods=["POST"])
def create_user():
    """Handles create user form"""
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    image_url = request.form["image_url"] if request.form["image_url"] else None

    new_user  = User(first_name=first_name, last_name=last_name, image_url=image_url)
    db.session.add(new_user)
    db.session.commit()

    return redirect('/users')


@app.route('/users/<int:user_id>/edit', methods=['POST'])
def edit_user(user_id):
    """Handles edit user form"""
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
    """Deletes a user"""
    User.query.filter_by(id=user_id).delete()
    db.session.commit()


    return redirect('/users')





# PART 2 ROUTES ---------------------

@app.route('/users/<int:user_id>/posts/new')
def show_post_form(user_id):
    user = User.query.get_or_404(user_id)

    return render_template('pform.html', user=user)


@app.route('/users/<int:user_id>/posts/new', methods=['POST'])
def handle_post_form(user_id):
    title = request.form['title']
    content = request.form['content']

    new_post = Post(title = title, content = content, user_id = user_id)
    db.session.add(new_post)
    db.session.commit()

    return redirect (f'/users/{user_id}')


@app.route('/posts/<int:post_id>')
def show_post(post_id):
    post = Post.query.get_or_404(post_id)

    return render_template('post.html', post=post)


@app.route('/posts/<int:post_id>/edit')
def show_edit_post_form(post_id):
    post = Post.query.get_or_404(post_id)

    return render_template('editp.html', post=post)


@app.route('/posts/<int:post_id>/edit', methods=['POST'])
def show_edit_post(post_id):
    post = Post.query.filter_by(id = post_id).first()

    title = request.form['edit_title']
    content = request.form['edit_content']

    post.title = title
    post.content = content
    db.session.add(post)
    db.session.commit()

    return redirect(f'/posts/{post_id}')




@app.route('/posts/<int:post_id>/delete', methods=['POST'])
def delete_post(post_id):
    Post.query.filter_by(id=post_id).delete()
    db.session.commit()

    return redirect('/')

