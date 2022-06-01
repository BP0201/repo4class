from stories import story
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def show_home():
    return render_template('home.html', words=story.prompts)

@app.route('/story')
def show_story():
    place = request.args.get('place')
    noun = request.args.get('noun')
    verb = request.args.get('verb')
    adjective = request.args.get('adjective')
    plural_noun = request.args.get('plural_noun')
    return render_template('story.html', place=place, noun=noun, verb=verb, adjective=adjective, plural_noun=plural_noun)