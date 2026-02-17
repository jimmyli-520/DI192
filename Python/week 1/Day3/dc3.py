# Challenge 1: Letter Index Dictionary

word = input("Enter a word: ")
my_dict = {}
for i, char in enumerate(word):
    if char in my_dict:
        my_dict[char].append(i)
    else:
        my_dict[char] = [i]

print(my_dict)


# Challenge 2: Affordable Items
items_purchase = {"Water": "$1", "Bread": "$3",
                  "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

wallet_clean = wallet.replace("$", "").replace(",", "")
wallet_amount = int(wallet_clean)

basket = []

for item, price in items_purchase.items():
    price_clean = price.replace("$", "").replace(",", "")
    price_amount = int(price_clean)

    if wallet_amount >= price_amount:
        wallet_amount -= price_amount
        basket.append(item)

if len(basket) == 0:
    print("Nothing")
else:
    print(sorted(basket))
