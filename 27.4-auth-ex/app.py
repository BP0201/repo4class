from models import User, db, connect_db, Feedback
from flask import Flask, flash, request, redirect, render_template, session
from forms import UserForm, LoginForm, FeedbackForm


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///feedback'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['SECRET_KEY'] = 'ooh_so_secret'

connect_db(app)


@app.route('/')
def handle_redirect():
    return redirect('/register')


@app.route('/register', methods=["GET","POST"])
def handle_registration():
    
    form = UserForm()

    if form.validate_on_submit():

        username = form.username.data
        password = form.password.data
        email = form.email.data
        first_name = form.first_name.data
        last_name = form.last_name.data

        new_user = User.register(username, password, email, first_name, last_name)

        db.session.add(new_user)
        db.session.commit()

        return redirect('/login')
    
    else:
        return render_template('register.html', form=form)


@app.route('/login', methods=["GET","POST"])
def handle_login_form():
    if 'current_user' in session:
        flash("Already signed in", "warning")
        return redirect('/users')

    form = LoginForm()

    if form.validate_on_submit():

        name = form.username.data
        pwd = form.password.data

        user = User.authenticate(name, pwd)

        if user:
            session['current_user'] = user.username
            return redirect(f'/users/{user.username}')
        
        else:
            form.username.errors = ["Bad username/password"]

    return render_template('login.html', form=form)


@app.route('/users')
def show_users():
    users = User.query.all()

    return render_template('users.html', users=users)


@app.route('/users/<username>')
def show_user_info(username):

    if "current_user" not in session:
        return redirect('/login')

    else:
        user = User.query.filter_by(username=username).first()

        if user:
            feedback = Feedback.query.filter_by(username=username).all()
            return render_template('user_info.html', user=user, feedback=feedback)
        
        else:
            flash("User not found", "warning")
            return redirect('/users')


@app.route('/logout')
def handle_logout():
    session.pop('current_user')
    return redirect('/')


@app.route('/users/<username>/delete', methods=["POST"])
def handle_user_deletion(username):
    user = User.query.filter_by(username=username).first()
    
    session.pop('current_user')
    db.session.delete(user)
    db.session.commit()

    flash("User deleted.", 'danger')
    return redirect('/login')


@app.route('/users/<username>/feedback/add', methods=["GET","POST"])
def handle_new_feedback(username):
    
    if 'current_user' not in session:
        return redirect('/login')
    
    else:
        user = User.query.filter_by(username=username).first()

        if user:
            if username == session['current_user']:
                form = FeedbackForm()

                if form.validate_on_submit():

                    title = form.title.data
                    content = form.content.data
                    new_feedback = Feedback(title=title, content=content, username=username)
                    db.session.add(new_feedback)
                    db.session.commit()
                    return redirect(f'/users/{username}')
                
                else:
                    return render_template('add_feedback.html', form=form)


@app.route('/feedback/<int:feed_id>/delete', methods=["POST"])
def handle_feedback_deletion(feed_id):
    if 'current_user' not in session:
        flash("You must log in to do this.")
        return redirect('/login') 

    else:
        feed = Feedback.query.get_or_404(feed_id)

        if session['current_user'] != feed.username:
            flash("You can't do that", "danger")
            return redirect('/users')
        
        else:
            feed.username == feed.users.username
            db.session.delete(feed)
            db.session.commit()
            return redirect(f'/users/{feed.users.username}')
                

@app.route('/feedback/<int:feed_id>/update', methods=["GET","POST"])
def update_feedback(feed_id):
    if 'current_user' not in session:
        flash("You must log in to do this.")
        return redirect('/login') 

    else:
        feed = Feedback.query.get_or_404(feed_id)

        if session['current_user'] != feed.username:
            flash("You can't do that", "danger")
            return redirect('/users')
        
        else:
            form = FeedbackForm(obj=feed)
            if form.validate_on_submit():
                feed.title = form.title.data
                feed.content = form.content.data
                db.session.commit()
                return redirect(f'/users/{feed.users.username}')
            return render_template('update_feed.html', form=form)