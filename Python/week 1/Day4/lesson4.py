def make_sandwich(type, *args, **kwargs):
  print(f"making a {type} sandwich")
  if args:
    for arg in args :
      print(f"adding{arg}")
  if kwargs:
    print("additional parameters are: ", kwargs)
make_sandwich("cheese", "lettuce", "tomato", breadtype= "brown pita")
      