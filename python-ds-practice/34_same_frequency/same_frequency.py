def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    num1str = str(num1)
    num2str = str(num2)
    num1dict = {num:num1str.count(num) for num in num1str}
    num2dict = {num:num2str.count(num) for num in num2str}
    
    if num1dict.items() == num2dict.items():
        return True
    
    else:
        return False

print(same_frequency(551122, 221515))
print(same_frequency(321142, 3212215))
print(same_frequency(1212, 2211))