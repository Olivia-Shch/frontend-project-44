import launchGame from '../index.js';
import getRandomNumber from '../random.js';

const getProgression = (num, difference, len) => {
  const progression = [];
  let number = num;
  let count = 0;
  while (count !== len) {
    progression.push(number);
    number += difference;
    count += 1;
  }
  return progression;
};

const generateQuestionProgression = () => {
  const number = getRandomNumber(50);
  const len = getRandomNumber(11, 5);
  const skip = getRandomNumber(len);
  const difference = getRandomNumber(21, -20);
  const progression = getProgression(number, difference, len);
  const correctAnswer = String(progression[skip]);
  const question = String(progression).replaceAll(',', ' ').replace(correctAnswer, '..', 1);
  return [question, correctAnswer];
};
const rulesGame = 'What number is missing in the progression?';
const startProgressionGame = () => launchGame(rulesGame, generateQuestionProgression);
export default startProgressionGame;
