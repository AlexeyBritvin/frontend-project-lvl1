import readlineSync from 'readline-sync';
import NUMBER_OF_GAMES from './config/config.js';
import { getQuestion, getAnswer } from './helper/create-question.js';

const startGame = (description, genGameRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let round = 0; round < NUMBER_OF_GAMES; round += 1) {
    const gameRoundData = genGameRoundData();
    const question = getQuestion(gameRoundData);
    const answer = getAnswer(gameRoundData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}`);
};

export default startGame;
