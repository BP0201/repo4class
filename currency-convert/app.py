from flask import Flask, render_template, request, redirect, session, flash
from forex_python.converter import CurrencyRates, CurrencyCodes

from converter import convert, check_validity


c = CurrencyRates()
d = CurrencyCodes()


# rate = c.convert('USD', 'EUR', 50)
# answer = round(rate, 2)
# other = c.get_rates('USD')


app = Flask(__name__)

app.config['SECRET_KEY'] = 'weoguweg'


@app.route('/')
def show_home():
    return render_template('index.html')


@app.route('/calc-curr', methods=["POST"])
def calculate_currency():
    solution = []
    session['solution'] = solution

    first_curr = request.form['first'].upper()
    to_curr = request.form['to'].upper()
    amount = float(request.form['amount'])
    
    if not check_validity(first_curr):
        flash(f'Not a valid code: {first_curr}', 'error')
        return redirect('/')
    
    elif not check_validity(to_curr):
        flash(f'Not a valid code: {to_curr}', 'error')
        return redirect('/')

    else:
        # flash('Something went right!', 'success')
        final = convert(first_curr, to_curr, amount)
        solution.append(final)
        return redirect('/')

