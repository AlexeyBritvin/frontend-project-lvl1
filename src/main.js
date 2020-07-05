import NUMBER_OF_GAMES from './config/config.js';
import { getName, askQuestion, giveFeedback } from './helper/communicate.js';

export const createQuestionPair = (question, answer) => ({ question, answer });

export const getAnswer = (pair) => pair.answer;

export const getQuestion = (pair) => pair.question;

const runGameRounds = (getGameQuestion) => {
  let round = 0;

  while (round < NUMBER_OF_GAMES) {
    const pair = getGameQuestion();
    const question = getQuestion(pair);
    const answer = getAnswer(pair);
    const userAnswer = askQuestion(question);
    giveFeedback(userAnswer, answer);

    const answerIsRight = answer === userAnswer;

    if (answerIsRight) {
      round += 1;
    } else {
      return false;
    }
  }

  return true;
};

export const game = (description, gameQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(description);

  const success = runGameRounds(gameQuestion);

  if (!success) {
    return console.log(`Let's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}`);
};
