import readlineSync from 'readline-sync';

const countOfRounds = 3;

const runGame = (roundsData, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < roundsData.length; i += 1) {
    const [question, rightAnswer] = roundsData[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const getRandomNumber = (maxI, minI = 0) => Math.floor(Math.random() * ((maxI + 1) - minI) + minI);
// maxI, minI = max number included, min number included

export {
  runGame, countOfRounds, getRandomNumber,
};
