# Exercise 1: What Are You Learning?

import random


def display_message():
    print("I am learning about functions in python.")


display_message()

# Exercise 2: What’s Your Favorite Book?


def favorite_book(title):
    print(f"My favorite book is {title}.")


favorite_book("Alice in Wonderland")

# Exercise 3: Some Geography


def describe_city(city, country="unknown"):
    print(f"{city} is in {country}")


describe_city("Reykjavik", "Iceland")
describe_city("Paris")


# Exercise 4: Random


def compare_number(number):
    random_number = random.randint(1, 100)
    if number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {number}, Random number: {random_number}")


compare_number(2)


# Exercise 5: Let’s Create Some Personalized Shirts!
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}. ")


make_shirt()
make_shirt("medium")
make_shirt("small", "Custom message")


# Exercise 6: Magicians…


magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]


def show_magicians(magician_names):
    for name in magician_names:
        print(name)


def make_great(magician_names):
    for i in range(len(magician_names)):
        magician_names[i] = magician_names[i] + " the Great"


make_great(magician_names)
show_magicians(magician_names)

# Exercise 7: Temperature Advice


def get_random_temp():
    return round(random.randint(-10, 40), 1)


def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius")
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp <= 23:
        print("Nice weather.")
    elif temp <= 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It's really hot! Stay cool.")


main()
