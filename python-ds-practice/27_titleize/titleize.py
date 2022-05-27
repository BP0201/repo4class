def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    lowPhrase = phrase.lower()
    print(lowPhrase.title())

titleize('this is awesome')
titleize('oNLy cAPITALIZe fIRSt')