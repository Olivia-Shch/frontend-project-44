import launchGame from '../index.js';
import getRandomNumber from '../random.js';

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionPrime = () => {
  const number = getRandomNumber(200);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};
const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startPrimeGame = () => launchGame(rulesGame, generateQuestionPrime);
export default startPrimeGame;
