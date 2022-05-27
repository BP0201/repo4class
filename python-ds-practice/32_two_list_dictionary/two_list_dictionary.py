def two_list_dictionary(keys, values):
    """Given keys and values, make dictionary of those.
    
        >>> two_list_dictionary(['x', 'y', 'z'], [9, 8, 7])
        {'x': 9, 'y': 8, 'z': 7}
        
    If there are fewer values than keys, remaining keys should have value
    of None:
    
        >>> two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3])
        {'a': 1, 'b': 2, 'c': 3, 'd': None}
    
    If there are fewer keys, ignore remaining values:

        >>> two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])
        {'a': 1, 'b': 2, 'c': 3}
   """
    dict = {}
    length = len(keys) 

    if length > len(values):
        diff = length - len(values)
        for num in range(length):
            if num <= len(values):
                dict.setdefault(keys[num], values[num])

            elif num > len(values):
                dict.setdefault(keys[num])

        print(dict)

    elif length < len(values):
        diff = len(values) - length
        for num in range(len(values) - diff):
            dict.setdefault(keys[num], values[num])
        print(dict)

    elif length == len(values):
        for num in range(length):
            dict.setdefault(keys[num], values[num])
        print(dict)
    
    else:
        return

two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3])
two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])