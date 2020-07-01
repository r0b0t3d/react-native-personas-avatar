export function combineCharacters({
  body,
  eyes,
  facialHair,
  hair,
  mouth,
  nose,
  backgroundColor,
  bodyColor,
  skinColor,
  hairColor,
  facialHairColor,
}) {
  return `${body}|${eyes}|${facialHair}|${hair}|${mouth}|${nose}|${backgroundColor}|${skinColor}|${hairColor}|${facialHairColor}|${bodyColor}`;
}

export function parseCharacters(characters: string) {
  const array = characters.split('|');
  return {
    body: array[0],
    eyes: array[1],
    facialHair: array[2],
    hair: array[3],
    mouth: array[4],
    nose: array[5],
    backgroundColor: array[6],
    skinColor: array[7],
    hairColor: array[8],
    facialHairColor: array[9],
    bodyColor: array[10],
  };
}

export const random = (array: any[]) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
