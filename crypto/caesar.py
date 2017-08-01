from helpers import alphabet_position, rotate_character, reverse

def encrypt(text,rot):
    
    new_string = ''
    for i in text:
        new_string = new_string + rotate_character(i, rot)

    return new_string    

def main():
    word = input("Type a message:")
    num = input("Rotate by:")
    num = int(num)
    print(encrypt(word, num))
if __name__ == "__main__":
    main()
