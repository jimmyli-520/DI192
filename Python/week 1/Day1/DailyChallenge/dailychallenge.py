
text = input("Enter a 10-character string: ")
if len(text) < 10:
  print ("String is not long enough.")
elif len(text) > 10:
  print("String too long")
else:
  print("Perfect string")
  print(text[0])
  print(text[-1])

  current= ""
  for char in text:
    current += char
    print(current)