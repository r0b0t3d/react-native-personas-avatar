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
    backgroundColor: array[7],
    bodyColor: array[8],
    skinColor: array[9],
    hairColor: array[10],
    facialHairColor: array[11],
  };
}

export const random = (array: any[]) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
