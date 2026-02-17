# Exercise 1: Converting Lists into Dictionaries
the_list = {"Ten": "10", "Twenty": "20", "Thirty": "30"}
print(the_list)


# Exercise 2: Cinemax
family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}
total_cost = 0
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    total_cost += price
    print(f"{name}: ${price}")
print(f"Total cost: ${total_cost}")

# Exercise 3: Zara
brand = {"name": "Zara",
         "creation_date": 1975,
         "creator_name": "Amancio Ortega Gaona",
         "type_of_clothes": "men, women, children, home",
         "international_competitors": "Gap, H&M, Benetton",
         "number_stores": 7000,
         "major_color": {"France": "blue", "Spain": "red", "US": ["pink, green"]}}

# Change the value of number_stores to 2.
brand.update({"number_stores": 2})

# Print a sentence describing Zara’s clients using the type_of_clothes key.
print("Zara's clients are" + brand["type_of_clothes"])

# Add a new key country_creation with the value Spain.
brand.update({"country_creation": "Spain"})

# Check if international_competitors exists and, if so, add “Desigual” to the list.
if "international_competitors" in brand:
    brand["international_competitors"] = brand["international_competitors"].split(
        ", ")
brand["international_competitors"].append("Desigual")

# Delete the creation_date key.
del brand["creation_date"]

# Print the last item in international_competitors.
print(brand["international_competitors"][-1])

# Print the major colors in the US.
print(brand["major_color"]["US"])

# Print the number of keys in the dictionary.
print(len(brand))

# Print all keys of the dictionary.
print(brand.keys())

# Create another dictionary called more_on_zara with creation_date and number_stores.
# Merge this dictionary with the original brand dictionary and print the result.
more_on_zara = {
    "ceation_date": 1975,
    "number_stores": 7000
}
brand.update(more_on_zara)
print(brand)


# Exercise 4: Disney Characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
dict1 = {user: i for i, user in enumerate(users)}
print(dict1)

dict2 = {i: user for i, user in enumerate(users)}
print(dict2)

dict3 = {user: i for i, user in enumerate(sorted(users))}
print(dict3)
