import chalk from 'chalk';

function showMenuMessage() {
  const header = chalk.bgGreen.black.bold(" TODAY'S SPECIALS ");
  const item1 = chalk.cyan("1. Caesar Salad") + chalk.gray(" ............ $12.00");
  const item2 = chalk.magenta("2. Margherita Pizza") + chalk.gray(" ...... $15.50");

  console.log(`\n${header}\n`);
  console.log(item1);
  console.log(item2);
  console.log("\n" + chalk.yellow.italic("Prices exclude tax.") + "\n");
}

// Export the function so app.js can see it
export default showMenuMessage;