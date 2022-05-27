def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    rev = [letter for letter in phrase]
    rev.reverse()
    print(''.join(rev))

reverse_string('awesome')
reverse_string('sauce')