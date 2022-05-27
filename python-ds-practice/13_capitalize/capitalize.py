def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """
    res = phrase.capitalize()
    print(res)

capitalize('python')
capitalize('only first word')