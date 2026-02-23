//Version 1 - One loop:
for (let i = 1; i <= 6; i++) {
  console.log("* ".repeat(i))
}
//Version 2 - Nested loops:
for (let i = 1; i <= 6; i++) {
  let star = ""
  for (let j = 1; j <= i; j++) {
    star += "* "
  }
  console.log(star)
}