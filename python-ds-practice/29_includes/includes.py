def includes(collection, sought, start=None):
    """Is sought in collection, starting at index start?

    Return True/False if sought is in the given collection:
    - lists/strings/sets/tuples: returns True/False if sought present
    - dictionaries: return True/False if *value* of sought in dictionary

    If string/list/tuple and `start` is provided, starts searching only at that
    index. This `start` is ignored for sets/dictionaries, since they aren't
    ordered.

        >>> includes([1, 2, 3], 1)
        True

        >>> includes([1, 2, 3], 1, 2)
        False

        >>> includes("hello", "o")
        True

        >>> includes(('Elmo', 5, 'red'), 'red', 1)
        True

        >>> includes({1, 2, 3}, 1)
        True

        >>> includes({1, 2, 3}, 1, 3)  # "start" ignored for sets!
        True

        >>> includes({"apple": "red", "berry": "blue"}, "blue")
        True
    """
    if type(collection) == dict:
        for key in collection.keys():
            if key is sought:
                return True
        for value in collection.values():
            if value is sought:
                return True
        return False
    else: 
        if start != None:
            for num in range(start):
                collection.pop(0)
            for item in collection:
                if item is sought:
                    return True
            return False

        else:
            for item in collection:
                if item is sought:
                    return True
            return False

print(includes([1, 2, 3], 1))
print(includes([1, 2, 3], 1, 2))
print(includes({"apple": "red", "berry": "blue"}, "blue"))