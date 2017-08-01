from helpers import alphabet_position, rotate_character, reverse


def encrypt(text, rot):
    new_str = ''
    counter = 0
    counter2 = 0
    cap = len(text)
    cap2 = len(rot)
    while counter < cap: 
        for char in text:
            if char.isalpha():
                
                idx = counter2 % cap2
                new_str = new_str + rotate_character(char,(alphabet_position(rot[idx])))
                counter2 += 1

            else:
                new_str = new_str + char

            counter += 1
    return new_str 

def main():
    word = input("Type a message:")
    key = input("Encryption Key:")
    print(encrypt(word, key)) 

if __name__ == "__main__":
    main()
                  