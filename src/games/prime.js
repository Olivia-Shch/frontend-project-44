import launchGame from '../index.js';
import getRandomNumber from '../random.js';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
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
