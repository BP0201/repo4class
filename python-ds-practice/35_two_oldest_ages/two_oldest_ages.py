def two_oldest_ages(ages):
    """Return two distinct oldest ages as tuple (second-oldest, oldest)..

        >>> two_oldest_ages([1, 2, 10, 8])
        (8, 10)

        >>> two_oldest_ages([6, 1, 9, 10, 4])
        (9, 10)

    Even if more than one person has the same oldest age, this should return
    two *distinct* oldest ages:

        >>> two_oldest_ages([1, 5, 5, 2])
        (2, 5)
    """
    ages.sort()
    if ages[-1] == ages[-2]:
        ages.pop(-1)
    
    length = len(ages) - 2
    for num in range(length):
        ages.pop(0)
    print((ages[0], ages[1]))
    


two_oldest_ages([1, 2, 10, 8])
two_oldest_ages([6, 1, 9, 10, 4])
two_oldest_ages([1, 5, 5, 2])



    # NOTE: don't worry about an optimized runtime here; it's fine if
    # you have a runtime worse than O(n)

    # NOTE: you can sort lists with lst.sort(), which works in place (mutates);
    # you may find it helpful to research the `sorted(iter)` function, which
    # can take *any* type of list-like-thing, and returns a new, sorted list
    # from it.