import { askQuestion, giveFeedback } from '../helper/communicate.js';
import isEven from '../helper/is-even.js';
import generateRandomInt from '../helper/random-int.js';

const YES = 'yes';
const NO = 'no';

const getCorrectAnswer = (num) => {
  if (isEven(num)) {
    return YES;
  }

  return NO;
};

const brainEvenRound = () => {
  const num = generateRandomInt(1, 100);
  const answer = askQuestion(num);
  const correctAnswer = getCorrectAnswer(num);
  giveFeedback(answer, correctAnswer);

  return answer === correctAnswer;
};

export default brainEvenRound;
