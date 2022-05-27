def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """
    if type(num) == str:
        return True
    elif num < 0:
        return True
    elif num == 0:
        print('')
    else:
        print(phrase * num)


repeat('*', 3)
repeat('abc', 2)
repeat('abc', 0)
print(repeat('abc', -1))
print(repeat('abc', 'nope'))