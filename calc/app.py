# Put your app in here.
from crypt import methods
import operations
from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def welcome():
    return """
    <a href="/add">Addition</a>
    <a href="/sub">Subtraction</a>
    <a href="/mult">Multiplication</a>
    <a href="/div">Division</a>
    """

@app.route('/add')
def add():
    html = """
    <html>
        <body>
            <h1>Add a + b:</h1>
                <form method="POST">
                    <input type="text" name="a" placeholder="Value of a">
                    <input type="text" name="b" placeholder="Value of b">
                    <button type="submit">Calculate</button>
    """
    return html

@app.route('/add', methods=["POST"])
def sum():
    a = int(request.form['a'])
    b = int(request.form['b'])
    return f"<h1>{operations.add(a,b)}</h1>"





@app.route('/sub')
def sub():
    html = """
    <html>
        <body>
            <h1>Subtract a - b:</h1>
                <form method="POST">
                    <input type="text" name="a" placeholder="Value of a">
                    <input type="text" name="b" placeholder="Value of b">
                    <button type="submit">Calculate</button>
    """
    return html

@app.route('/sub', methods=["POST"])
def subtract():
    a = int(request.form['a'])
    b = int(request.form['b'])
    return f"<h1>{operations.sub(a,b)}</h1>"







@app.route('/mult')
def multiply():
    html = """
    <html>
        <body>
            <h1>Multiply a - b:</h1>
                <form method="POST">
                    <input type="text" name="a" placeholder="Value of a">
                    <input type="text" name="b" placeholder="Value of b">
                    <button type="submit">Calculate</button>
    """
    return html

@app.route('/mult', methods=["POST"])
def multify():
    a = int(request.form['a'])
    b = int(request.form['b'])
    return f"<h1>{operations.mult(a,b)}</h1>"








@app.route('/div')
def divise():
    html = """
    <html>
        <body>
            <h1>Subtract a - b:</h1>
                <form method="POST">
                    <input type="text" name="a" placeholder="Value of a">
                    <input type="text" name="b" placeholder="Value of b">
                    <button type="submit">Calculate</button>
    """
    return html

@app.route('/div', methods=["POST"])
def divide():
    a = int(request.form['a'])
    b = int(request.form['b'])
    return f"<h1>{operations.div(a,b)}</h1>"