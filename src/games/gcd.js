import launchGame from '../index.js';
import getRandomNumber from '../random.js';

const gcd = (a, b) => ((a % b) ? gcd(b, a % b) : Math.abs(b));

const generateQuestionGcd = () => {
  const number1 = getRandomNumber(101, 1);
  const number2 = getRandomNumber(101, 1);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};
const rulesGame = 'Find the greatest common divisor of given numbers.';
const startGcdGame = () => launchGame(rulesGame, generateQuestionGcd);
export default startGcdGame;
