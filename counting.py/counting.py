



def counting_dict(string):
    new_dict = {}
    for char in string:
        if char in new_dict:
            new_dict[char] = new_dict[char] + 1
        else :    
            new_dict[char] = 1
        
             
    return new_dict   



def find_factors(n):
    lst = []
    for num in range(1,n+1):
        if (n % num) == 0:
            lst = lst + [num]
    return lst        





def factors(n):
    new_dict = {}
    for num in range(n):
        new_dict[num] = find_factors(num)
        
    return new_dict 



def reverse(dict1):
    dict2 = dict1.copy()
    new_dict = {}
    for element in dict2:
        new_dict[dict2[element]] = element

    return new_dict    


a = {'a': 1, 'b' : 2, 'c' : 3}
print(reverse(a))