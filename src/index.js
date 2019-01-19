import rn from 'random-number';

export const generateNumber = (minValue, maxValue) => {
  const numberGenerator = rn.generator({
    min: minValue,
    max: maxValue,
    integer: true,
  });

  return numberGenerator();
};

export default generateNumber;
