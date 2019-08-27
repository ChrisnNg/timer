// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating


const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {//quit on ctrl + c
    process.stdout.write("Thanks for using me, ciao!" + "\n");
    process.exit();
  }
  process.stdout.write(key + "\n");
  if (key === "b") {
    process.stdout.write("beep" + "\n");
  }
  if (!isNaN(key) && key !== " ") {
    process.stdout.write("setting timer for " + key + " seconds" + "\n");
    setTimeout(() => {
      process.stdout.write("beep" + "\n");
    }, key * 1000);
  }
});

console.log('after callback');