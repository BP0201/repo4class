def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    phrase = phrase.lower()
    phrase = phrase.replace(' ', '')
    lst = [letter for letter in phrase]
    rev = lst.copy()
    rev.reverse()
    if lst == rev:
        print(True)
    else: print(False)

is_palindrome('apple')
is_palindrome('taco cat')
is_palindrome('Noon')
