import { askQuestion, giveFeedback } from '../helper/communicate.js';
import generateRandomInt from '../helper/random-int.js';

const operations = ['+', '-', '*'];

const getCorrectAnswer = (num1, num2, operation) => {
  const [addition, substraction, multiplication] = operations;
  let answer;

  switch (operation) {
    case addition:
      answer = num1 + num2;
      break;

    case substraction:
      answer = num1 - num2;
      break;

    case multiplication:
      answer = num1 * num2;
      break;

    default:
      throw new Error('Unexpected operation');
  }

  return answer.toString();
};

const brainCalcRound = () => {
  const num1 = generateRandomInt(1, 10);
  const num2 = generateRandomInt(1, 10);
  const operation = operations[generateRandomInt(0, 2)];
  const answer = askQuestion(`${num1} ${operation} ${num2}`);
  const correctAnswer = getCorrectAnswer(num1, num2, operation);
  giveFeedback(answer, correctAnswer);

  return answer === correctAnswer;
};

export default brainCalcRound;
