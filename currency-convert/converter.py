from flask import Flask, render_template, request, redirect, session, flash
from forex_python.converter import CurrencyRates, CurrencyCodes

c = CurrencyRates()
d = CurrencyCodes()


def check_validity(code):
    if code == 'USD':
        if code not in c.get_rates('EUR'):
            return False

    else:
        if code not in c.get_rates('USD'):
            return False

    return True


def convert(first, second, amount):
    symbol = d.get_symbol(second)
    ans = c.convert(first, second, amount) 
    res = "{:.2f}".format(ans)
    return symbol + str(res)