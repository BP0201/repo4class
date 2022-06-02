from crypt import methods
from urllib import response
from flask import Flask, request, render_template, redirect, flash
from importlib_metadata import method_cache
from flask_debugtoolbar import DebugToolbarExtension

from surveys import satisfaction_survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "chickens"
debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

responses = []


@app.route('/')
def show_home_page():
    return render_template('home.html', survey=satisfaction_survey, instructions=satisfaction_survey.instructions)

# @app.route('/questions/0')
# def show_question_0():
#     return render_template('question0.html', question=satisfaction_survey.questions[0].question, choices=satisfaction_survey.questions[0].choices)

# @app.route('/questions/1')
# def show_question_1():
#     return render_template('question1.html', question=satisfaction_survey.questions[1].question, choices=satisfaction_survey.questions[1].choices)

# @app.route('/questions/2')
# def show_question_2():
#     return render_template('question2.html', question=satisfaction_survey.questions[2].question, choices=satisfaction_survey.questions[2].choices)

# @app.route('/questions/3')
# def show_question_3():
#     return render_template('question3.html', question=satisfaction_survey.questions[3].question, choices=satisfaction_survey.questions[3].choices)

@app.route('/questions/<int:num>')
def show_question(num):
    if num == len(responses):
        return render_template(f'/question{num}.html', question=satisfaction_survey.questions[num].question, choices=satisfaction_survey.questions[num].choices)

    elif len(responses) == 0:
        return redirect('/questions/1')

    else:
        flash('Invalid Question Number.')
        return render_template(f'/question{len(responses)}.html', question=satisfaction_survey.questions[len(responses)].question, choices=satisfaction_survey.questions[len(responses)].choices)
    
    

@app.route('/answers', methods=["POST"])
def add_answer():
    answer = request.form["answer"]
    responses.append(answer)
    if len(responses) >= len(satisfaction_survey.questions):
        return redirect('/thank')

    else:
        return redirect(f'/questions/{len(responses)}')


@app.route('/thank')
def show_thank_page():
    return render_template('thank.html', responses=responses)
