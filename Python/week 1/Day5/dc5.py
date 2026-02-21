# Challenge 1: Sorting


user_input = input("Enter words, separated by comma: ")
words = user_input.split(",")
words.sort()
result = ",".join(words)
print(result)


# Challenge 2: Longest Word

def longest_word(sentence):
    words = sentence.split()
    longest = ""
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest
