import launchGame from '../index.js';
import getRandomNumber from '../random.js';

const isPrime = (num) => {
  if (elem <= 1) return false;
  for (let i = 2; i < Math.sqrt(elem); i += 1) {
    if (elem % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionPrime = () => {
  const randomNum = getRandomNumber(0, 100);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = randomNum;
  return { correctAnswer, question };
};
const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startPrimeGame = () => launchGame(rulesGame, generateQuestionPrime);
export default startPrimeGame;
