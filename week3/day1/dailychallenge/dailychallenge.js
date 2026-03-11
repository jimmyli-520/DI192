const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

//  1 - forEach() to build usernames array
const usernames = [];
gameInfo.forEach((player) => {
  usernames.push(`${player.username}!`);
});
console.log(usernames);

// 2 - forEach() to build winners array
const winners = [];
gameInfo.forEach((player) => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});
console.log(winners);

// 3 - reduce() to find total score
const totalScore = gameInfo.reduce((accumulator, player) => {
  return accumulator + player.score;
}, 0);
console.log(totalScore);

