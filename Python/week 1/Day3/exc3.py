# Exercise 1: Converting Lists into Dictionaries
# the_list = {"Ten": "10", "Twenty": "20", "Thirty": "30"}
# print(the_list)


# Exercise 2: Cinemax
# family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}
# total_cost = 0
# for name, age in family.items():
#     if age < 3:
#         price = 0
#     elif 3 <= age <= 12:
#         price = 10
#     else:
#         price = 15
#     total_cost += price
#     print(f"{name}: ${price}")
# print(f"Total cost: ${total_cost}")

# Exercise 3: Zara
brand = {"name": "Zara",
         "creation_date": 1975,
         "creator_name": "Amancio Ortega Gaona",
         "type_of_clothes": "men, women, children, home",
         "international_competitors": "Gap, H&M, Benetton",
         "number_stores": 7000,
         "major_color": {"France": "blue", "Spain": "red", "US": ["pink, green"]}}

# brand.update({"number_stores": 2})
# # print("Zara's clients are" + brand["type_of_clothes"])
# brand.update({"country_creation": "Spain"})

# if "international_competitors" in brand:
# brand["international_competitors"] = brand["international_competitors"].split(
#     ", ")
# brand["international_competitors"].append("Desigual")
# del brand["creation_date"]
# print(brand["international_competitors"][-1])

# print(brand["major_color"]["US"])
# print(len(brand))
print(brand.keys())
# print(brand)
