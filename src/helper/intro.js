export const gameTypes = {
  brainCalc: 'brain-calc',
  brainEven: 'brain-even',
};

export const gameIntros = [{
  type: gameTypes.brainCalc,
  text: 'What is the result of the expression?',
}, {
  type: gameTypes.brainEven,
  text: 'Answer "yes" if the number is even, otherwise answer "no".',
}];

export const getIntro = (gameType) => {
  const intro = gameIntros.find(({ type }) => type === gameType);
  if (intro === undefined) {
    throw new Error(`Unexpected game type: ${gameType}`);
  }

  return intro.text;
};
