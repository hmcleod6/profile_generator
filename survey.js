const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your nickname? ', (answer) => {
  console.log(`My nickname is ${answer}`);
  rl.question("What\'s an activity you like doing? ", (answer) => {
    console.log(`I like ${answer}`);
    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`I listen to ${answer}`);
      rl.question("Which meal is your favourite? ", (answer) => {
        console.log(`My favorite meal is ${answer}`);
        rl.question("What is your favourite sport? ", (answer) => {
          console.log(`My favorite sport is ${answer}`);
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
            console.log(`My superpower is ${answer}`);
            rl.close();
          });
        });
      });
    });
  });
});