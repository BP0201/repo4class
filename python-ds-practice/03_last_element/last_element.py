def last_element(lst):
    """Return last item in list (None if list is empty.
    
        >>> last_element([1, 2, 3])
        3
        
        >>> last_element([]) is None
        True
    """
    copy = lst.copy()
    copy.pop()
    
    if len(lst) == 0:
        return None
    else: print( lst[len(copy)] )

last_element([1,2,3])
last_element(['a','b','c','d','e'])
