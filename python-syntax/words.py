def print_upper_words(words):
    """Given a list of words, return each word on its own line uppercased."""

    for word in words:
        print(word.upper())



print_upper_words(["hey", 'hello', 'bye', 'goodbye'])

def print_upper_words_with_e(words):
    """Given a list of words, return each word that starts with e on its own line uppercased."""

    for word in words:
        if word[0].lower() == 'e':
            print(word.upper())

print_upper_words_with_e(['Early','late','hey','evening'])

def print_upper_words_generalized(words, required_letters):
    """Given a list of words, return the words that start with the specified letters on its own line in uppercase."""

    # nested loop, check each first letter of each word
    for word in words:
        for letter in required_letters:
            if word.startswith(letter):
                print(word.upper())
                break


print_upper_words_generalized(['hey','bart','aloe'], ['a','h'])