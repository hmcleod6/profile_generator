const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your nickname? ', (answer) => {
  console.log(`My nickname is ${answer}`);
  const nickName = answer;
  rl.question("What\'s an activity you like doing? ", (answer) => {
    console.log(`I like ${answer}`);
    const activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`I listen to ${answer}`);
      const music = answer;
      rl.question("Which meal is your favourite? ", (answer) => {
        console.log(`My favorite meal is ${answer}`);
        const favoriteMeal = answer;
        rl.question("What is your favourite sport? ", (answer) => {
          console.log(`My favorite sport is ${answer}`);
          const sport = answer;
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
            console.log(`My superpower is ${answer}`);
            const superPower = answer;
            console.log(`${nickName} loves listening to ${music} while ${activity}, devouring ${favoriteMeal}, prefers ${sport} over any other sport, and is amazing at ${superPower}`);
            rl.close();
          });
        });
      });
    });
  });
});