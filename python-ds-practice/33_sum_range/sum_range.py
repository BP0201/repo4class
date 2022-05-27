def sum_range(nums, start=0, end=None):
    """Return sum of numbers from start...end.

    - start: where to start (if not provided, start at list start)
    - end: where to stop (include this index) (if not provided, go through end)

        >>> nums = [1, 2, 3, 4]

        >>> sum_range(nums)
        10

        >>> sum_range(nums, 1)
        9

        >>> sum_range(nums, end=2)
        6

        >>> sum_range(nums, 1, 3)
        9

    If end is after end of list, just go to end of list:

        >>> sum_range(nums, 1, 99)
        9
    """
    sum = 0

    if end == None:
        if start != 0:
            for num in range(start):
                nums.pop(0)

        for num in nums:
            sum = sum + num


    elif end !=0 and end <= len(nums):
        if start != 0:
            for num in range(start -1):
                nums.pop(0)


        for num in nums:
            if nums.index(num) < end:
                sum = sum + num


    
    elif end > len(nums):
        if start != 0:
            for num in range(start-1):
                nums.pop(0)

        for num in nums:
            sum = sum + num
    
    else:
        print('Something went wrong.')
    
    print(sum)


nums = [1, 2, 3, 4]

sum_range(nums)
sum_range(nums, 1)
sum_range(nums, end=2)
sum_range(nums, 1, 3)
sum_range(nums, 1, 99)