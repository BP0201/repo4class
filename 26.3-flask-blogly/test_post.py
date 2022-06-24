from unittest import TestCase

from app import app
from models import db, Post, User

# Use test database and don't clutter tests with SQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///posts_test'
app.config['SQLALCHEMY_ECHO'] = False

# Make Flask errors be real errors, rather than HTML pages with error info
app.config['TESTING'] = True

# This is a bit of hack, but don't use Flask DebugToolbar
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

db.drop_all()
db.create_all()


class PostViewsTestCase(TestCase):
    """Tests for views for Pets."""

    def setUp(self):
        """Add sample pet."""

        Post.query.delete()
        User.query.delete()

        user = User(first_name="Test", last_name="User")
        post = Post(title='TestTitle', content='DummyContent', user_id=1)
        db.session.add(user)
        db.session.commit()

        db.session.add(post)
        db.session.commit()

        self.post_id = post.id
        self.post = post

    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()


    def test_show_post(self):
        with app.test_client() as client:
            resp = client.get(f"/posts/{self.post_id}")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('TestTitle', html)
            self.assertIn(self.post.content, html)
        
    def test_add_post_form(self):
        with app.test_client() as client:
            resp = client.get(f"/users/{self.post.user_id}/posts/new")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('Add Post for Test User', html)

    def test_edit_post_form(self):
        with app.test_client() as client:
            resp = client.get(f"/posts/{self.post.id}/edit")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('Edit Post', html)