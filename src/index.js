import readlineSync from 'readline-sync';
import getGreeting from './cli.js';

const countRounds = 3;

const launchGame = (rules, generateRound) => {
  const userName = getGreeting();
  console.log(rules);
  for (let i = 0; i < countRounds; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
