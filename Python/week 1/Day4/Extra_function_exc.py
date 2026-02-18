def analyze_word(word):
    vowels = 0
    consonants = 0
    for char in word:
        if char.isalpha():
            if char.lower() in "aeiou":
                vowels += 1
            else:
                consonants += 1
    total_letters = vowels + consonants
    if total_letters > 0:
        vowels_percentage = round((vowels/total_letters) * 100, 2)
    else:
        vowels_percentage = 0.0

    return {
        "length": len(word),
        "vowels": vowels,
        "consonants": consonants,
        "vowels_percentage": vowels_percentage
    }


result = analyze_word("askhfk hsk alhsHKHGGKHJKBA jhskdhs 1009090923")
print(result)
