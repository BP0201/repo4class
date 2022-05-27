def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3
    """
    print(word.count(letter))

single_letter_count('baseball', 'b')
single_letter_count('baseball', 's')
single_letter_count('baseball', 'l')
single_letter_count('baseballbbbbbbbb', 'b')
