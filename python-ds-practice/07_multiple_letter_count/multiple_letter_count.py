def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    dict = {letter:phrase.count(letter) for letter in phrase}
    print(dict)

multiple_letter_count('Yay')
multiple_letter_count('yay')
