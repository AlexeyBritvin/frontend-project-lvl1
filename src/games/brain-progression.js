import generateRandomInt from '../helper/random-int.js';
import { game, createQuestionPair } from '../main.js';

const description = 'What number is missing in the progression?';

const generateProgression = (size) => {
  const step = generateRandomInt(1, 5);
  const start = generateRandomInt(1, 100);
  const progression = [start];

  for (let i = 0; i < size; i += 1) {
    const next = step + progression[i];
    progression.push(next);
  }

  return progression;
};

const getAnswer = (num) => num.toString();

const brainProgressionQuestion = () => {
  const progression = generateProgression(10);
  const copy = [...progression];
  const indexToReplace = generateRandomInt(0, 9);
  const [replaced] = copy.splice(indexToReplace, 1, '..');
  const question = `${copy.join(', ')}`;
  const answer = getAnswer(replaced);

  return createQuestionPair(question, answer);
};

const brainProgressionGame = () => game(description, brainProgressionQuestion);

export default brainProgressionGame;
