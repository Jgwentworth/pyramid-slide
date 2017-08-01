def reverse(dict1):
    dict2 = dict1.copy()
    new_dict = {}
    for element in dict2:
        new_dict[dict2[element]] = element

    return new_dict    


def alphabet_position(letter):
    import string
    new_dict = {}
    counter = 0
    for char in string.ascii_lowercase:

        new_dict[char] = counter
        counter += 1

    counter = 0    

    for char in string.ascii_uppercase:

        new_dict[char] = counter 
        counter += 1   

    return new_dict[letter]


def rotate_character(char,rot):

    import string

    if char not in string.ascii_uppercase and char not in string.ascii_lowercase:

        return char

    new_dict = {}
    counter = 0
    for item in string.ascii_lowercase:

        new_dict[item] = counter
        counter += 1

    rotate_dict = reverse(new_dict)

    char_int = alphabet_position(char)

    new_letter = (char_int + rot)
    final_letter = (new_letter % 26)
    last = (rotate_dict.get(final_letter))

    if char in string.ascii_uppercase:
        last = last.upper()

    return last  