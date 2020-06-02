const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answerDatabase = [];

rl.question(`What's your name? Nicknames are also acceptable :) -> `, (answer) => {
  answerDatabase.push(`${answer}`);
  rl.question(`What's an activity you like doing? -> `, (answer2) => {
    answerDatabase.push(`${answer2}`)
    rl.question(`What do you listen to while doing that? -> `, (answer3) => {
      answerDatabase.push(`${answer3}`)
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) -> `, (answer4) => {
        answerDatabase.push(`${answer4}`)
        rl.question(`What's your favourite thing to eat for that meal? -> `, (answer5) => {
          answerDatabase.push(`${answer5}`)
          rl.question(`If you could travel anywhere in the world right now, where would that be? -> `, (answer6) => {
            answerDatabase.push(`${answer6}`)
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! -> `, (answer7) => {
              answerDatabase.push(`${answer7}`)
              console.log(answerDatabase[0] + ` loves listening to ` + answerDatabase[2] + ` while ` + answerDatabase[1] + `, devouring ` + answerDatabase[4] + ` for ` + answerDatabase[3] + `, would go to ` + answerDatabase[5] + ` if they could right now, and is amazing at ` + answerDatabase[6]);
              rl.close();
            });
          });
        });
      });
    });
  });
})