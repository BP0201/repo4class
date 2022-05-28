"""Word Finder: finds random words from a dictionary."""


from random import choice


class WordFinder:
    """Reads a document of text and searches for a word to return."""
    def __init__(self, path):
        file = open(path)
        self.words = self.translate(file)
        print(f"{len(self.words)} words read.")

    def translate(self, file):
        """Translate file of words."""
        return [word.strip() for word in file]

    def random(self):
        """Returns a random word from file."""
        return choice(self.words)

class SpecialWordFinder(WordFinder):
    """Special Word Finder that ignores comments or blank lines."""
    def parse(self, file):
        return [word.strip() for word in file if not word.startswith('#')]



words = WordFinder("words.txt")
print(words)
print(words.random())

swf = SpecialWordFinder('words.txt')
print(swf)
