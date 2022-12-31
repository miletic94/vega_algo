// Zadatak Uzgajanje cveća

function flowering(
  flower: string,
  watering: number,
  fertilizer: number,
  temperature: number
) {
  let resultingFlower = "";
  const MINIMUM_OPTIMAL_TEMPERATURE = 20;
  const MAXIMUM_OPTIMAL_TEMPERATURE = 30;

  const stable = "-".repeat(watering);
  if (
    temperature >= MINIMUM_OPTIMAL_TEMPERATURE &&
    temperature <= MAXIMUM_OPTIMAL_TEMPERATURE
  ) {
    const flowerArray = `${flower}`.repeat(fertilizer);
    for (let i = 0; i < watering; i++) {
      resultingFlower += `${stable}${flowerArray}`;
    }
  } else {
    for (let i = 0; i < watering; i++) {
      resultingFlower += `${stable}`;
    }
    resultingFlower += flower;
  }

  return resultingFlower;
}

console.log(flowering("#", 7, 12, 20));
