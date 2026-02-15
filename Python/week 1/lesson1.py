print("Hello to Python")
print(2 + 2)

greeting = "hello world"
print(greeting.capitalize())
print(len(greeting))

text = "Hello world"
print(text.count("l"))

str_num = 42
print(int(str_num) + 1)

num = 42
print(str(num) + " is the answer")

# incremeting 
counter = 0
counter = counter + 1
# counter = *= 5

first = "John"
last = "Doe"

text1 = "Hello, " + " " + first + " " + last
print(text1)

text3 = "Hello, {} {}". format(last, first)
print(text3)

text4 = f"Hello, {first} {last}"
print(text4)

price = 19.99
quantity = 3
total = f"Total: ${price * quantity}"

pi = 3.14159

# name = input("What is your name?")
# print(f"Hello, {name}")

# age = input("What is your age?")
# print(f"")

# age = 19
# if age >= 18:
#   print("you can vote!")
#   print("finish")

score = 85
if score >= 90:
  grade = "A"
elif score >= 80:
  grade = "B"
elif score >= 70:
  grade = "C"
else: 
  grade = "F"
print(grade)
