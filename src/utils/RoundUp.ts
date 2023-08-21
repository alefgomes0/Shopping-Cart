export const roundUpToTwoDecimalPlaces = (num: number) => {
  // Multiply the number by 100 to move two decimal places to the left
  const multiplied = num * 100;

  // Use Math.ceil to round up
  const rounded = Math.ceil(multiplied);

  // Divide the result by 100 to get back to two decimal places
  return rounded / 100;
}