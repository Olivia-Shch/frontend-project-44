import launchGame from '../index.js';
import getRandomNumber from '../random.js';

const calc = (a, b, operation) => {
  switch (operation) {
    case '*': return a * b;
    case '+': return a + b;
    case '-': return a - b;
    default: throw new Error(`No operation - ${operation}`);
  }
};

const generateQuestionCalc = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operations = ['*', '+', '-'];
  const operation = operations[getRandomNumber(3)];
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(calc(number1, number2, operation));
  return [question, correctAnswer];
};
const rulesGame = 'What is the result of the expression?';
const startCalcGame = () => launchGame(rulesGame, generateQuestionCalc);
export default startCalcGame;
