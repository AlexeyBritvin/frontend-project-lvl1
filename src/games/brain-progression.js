import { askQuestion, giveFeedback } from '../helper/communicate.js';
import generateRandomInt from '../helper/random-int.js';
import generateProgression from '../helper/progression.js';

const getCorrectAnswer = (num) => num.toString();

const brainProgressionRound = () => {
  const progression = generateProgression(10);
  const copy = [...progression];
  const indexToReplace = generateRandomInt(0, 9);
  const [replaced] = copy.splice(indexToReplace, 1, '..');
  const answer = askQuestion(`${copy.join(', ')}`);
  const correctAnswer = getCorrectAnswer(replaced);
  giveFeedback(answer, correctAnswer);

  return answer === correctAnswer;
};

export default brainProgressionRound;
