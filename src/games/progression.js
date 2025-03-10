import launchGame from '../index.js';
import getRandomNumber from '../random.js';

const getProgression = (start, step, length) => {
  Array.from({ length }, (_, i) => start + i * step)
};

const generateQuestionProgression = () => {
  const start = getRandomNumber(1, 50);
  const length = getRandomNumber(5, 10);
  let step = getRandomNumber(-10, 10);
  if (step === 0) step = 1;
  const skip = getRandomNumber(0, length - 1);
  const progression = getProgression(start, step, length);
  const correctAnswer = String(progression[skip]);
  const question = `Question: ${progression
    .map((num, idx) => (idx === skip ? '..' : num))
    .join(' ')}`;
  return [question, correctAnswer];
};
const rulesGame = 'What number is missing in the progression?';
const startProgressionGame = () => launchGame(rulesGame, generateQuestionProgression);
export default startProgressionGame;
