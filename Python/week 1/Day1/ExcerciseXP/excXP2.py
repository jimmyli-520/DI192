# 1 Facorite Number
my_fav_numbers = {3, 6, 8, 9}
my_fav_numbers.add(2)
my_fav_numbers.add(5)
my_fav_numbers.remove(3)

friend_fav_numbers = {2, 5, 11, 15}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


# Tuple
thistuple = (1, 5, 7, 8)
number = thistuple + (6, 9, 10)
print(number)


# List Manipulation
basket = ["banana", "Apples", "Oranges", "Blueberries"]
basket.remove("banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
basket.clear()
print(apple_count)
print(basket)

# 4 Floats
sequence = []
num = 1.5
while num <= 5:
    sequence.append(num)
    num += 0.5
print(sequence)

# 5 For loop
for number in range(21):
    print(number)
for number in range(1, 21, 2):
    print(number)

# 6 While Loop
while True:
    name = input("Enter your name: ")
    if name.isdigit() or len(name) < 3:
        print("Give the correct name")
    else:
        print("Thank you")
        break

# 7 Favorite Fruits
user = input("Ener favorite fruits, separated by space: ")
fruit_list = user.split()
choice = input("Enter a fruit to search for: ")
if choice in fruit_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# 8 Pizza Topping
toppings = []
while True:
    topping = input("Enter a topping,one by one: ")
    if topping == "quit":
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_price = 10 + (len(toppings) * 2.5)

print(f"All the toppings: {toppings}")
print(f"Your total is : ${total_price}")

# 9 Cinemax Tickets
total_cost = 0
count = int(input("How many tickets: "))
for number in range(count):
    age = int(input("Enter age: "))
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15
    total_cost = total_cost + price
print(f"Total cost is: ${total_cost}")

# Bonus
age_allowed = [13, 15, 17, 18, 19, 20, 23,]
attendees = []
for age in age_allowed:
    if 16 <= age <= 21:
        attendees.append(age)
print(f"Attendees allowed: {attendees}")
