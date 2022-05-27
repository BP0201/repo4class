def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    loweredPhrase = phrase.lower()
    dict = {letter:loweredPhrase.count(letter) for letter in loweredPhrase if letter in 'aeiou'}
    print(dict)

vowel_count('rithm school')
vowel_count('HOW ARE YOU? i am great!') 