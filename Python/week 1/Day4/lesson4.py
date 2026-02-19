# def make_sandwich(type, *args, **kwargs):
#   print(f"making a {type} sandwich")
#   if args:
#     for arg in args :
#       print(f"adding{arg}")
#   if kwargs:
#     print("additional parameters are: ", kwargs)
# make_sandwich("cheese", "lettuce", "tomato", breadtype= "brown pita")


# def ticket_price(age):
#   if age < 0:
#     return "Invalid age"
#   elif age < 12:
#     return "Child ticket: 5₪"
#   elif age <= 17:
#     return "Teen ticket: 8₪"
#   return "Adult ticket: 12₪"
# print(ticket_price(10))
# print(ticket_price(15))
# print(ticket_price(30))


# def get_grade(score):
#     if score < 0 or score > 100:
#         return "Invalid score"
#     elif score >= 90:
#         return "A"
#     elif score >= 80:
#         return "B"
#     elif score >= 70:
#         return "C"
#     elif score >= 60:
#         return "D"
#     return "F"
# print(get_grade(95))
# print(get_grade(82))
# print(get_grade(74))
# print(get_grade(61))
# print(get_grade(40))
# print(get_grade(150))


# def starts_with_A(s):
#     return s[0] == "A"

# fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# filtered_object = filter(starts_with_A, fruit)

# print(list(filtered_object))


# fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# filtered_object = filter(lambda s: s[0] == "A", fruit)

# print(list(filtered_object))


# import random
# def get_random_temp():
#   return round(random.randint(-10, 40), 1)

# def main():
#   temp = get_random_temp()
#   print(f"The current tempurature is {temp}")

#   if temp < 0:
#     print(“Brrr, that’s freezing! Wear some extra layers today.”)
#   elif temp < 6:
#     print(“Quite chilly! Don’t forget your coat.”)
#   elif temp < 23:
#     print(“Nice weather.”)
#   elif temp < 32:
#     print(“A bit warm, stay hydrated.”)
#   else:
#     print(“It’s really hot! Stay cool.”)


##################################################

# Coffee Shop Menu Manager

# Initial data
menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}


def show_menu(menu_dict):
    """Print all drinks and prices."""
    for item, price in menu:
        print(f"{item} -> {price}")


def add_item(menu_dict):
    """Add a new drink to the menu."""
    item = input("add item to menu")
    pass


def update_price(menu_dict):
    """Change the price of an existing drink."""
    pass


def delete_item(menu_dict):
    """Remove a drink from the menu."""
    pass


def show_options():
    """Print the available actions."""
    pass


def run_coffee_shop():
    """Main loop of the program."""
    # TODO
    # while True:
    #   1. show_options()
    #   2. get user choice
    #   3. if 1 -> show_menu(menu)
    #      if 2 -> add_item(menu)
    #      if 3 -> update_price(menu)
    #      if 4 -> delete_item(menu)
    #      if 5 -> print("Goodbye!") and break
    #      else -> "Invalid choice, try again."
    pass


# Start the program
run_coffee_shop()
