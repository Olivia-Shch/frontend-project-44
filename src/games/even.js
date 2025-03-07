import launchGame from '../index.js';
import getRandomNumber from '../random.js';

const isEven = (num) => num % 2 === 0;

const generateQuestionParity = () => {
  const number = getRandomNumber(100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};
const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const startEvenGame = () => launchGame(rulesGame, generateQuestionParity);
export default startEvenGame;
