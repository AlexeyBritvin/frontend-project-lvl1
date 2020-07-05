import generateRandomInt from '../helper/random-int.js';
import generateProgression from '../helper/progression.js';
import { game, createQuestionPair } from '../main.js';

const description = 'What number is missing in the progression?';

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
