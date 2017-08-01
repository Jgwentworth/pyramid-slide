def get_initials(fullname):
    fullname = fullname.upper()
    fullname = fullname.split()
    new_name = ''
    
    for char in fullname:
        new_name = new_name + char[0]
    return new_name

def main():
    fullname = input("What is your full name?")
    print(get_initials(fullname))
if __name__ == '__main__' :  
    main()
