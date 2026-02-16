
# Challenge 1: Multiples of a Number
number = int(input("Enter a number: "))
length = int(input("Enter a length "))
multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)
    print(multiples)


# Challenge 2: Remove Consecutive Duplicate Letters

word = input("Enter a string: ")
new_word = ""
for char in word:
    if not new_word or char != new_word[-1]:
        new_word += char
print(new_word)
