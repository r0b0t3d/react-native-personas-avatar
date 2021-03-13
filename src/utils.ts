import { Characters } from './types';

export const DEFAULT_CHARACTERS: Characters = {
  skinColor: 'sc1',
  hair: 'hair1',
  hairColor: 'hc1',
  body: 'body1',
  bodyColor: 'bc1',
  facialHair: 'facialHair1',
  facialHairColor: 'fhc1',
  eyes: 'eyes1',
  mouth: 'mouth1',
  nose: 'nose1',
  backgroundColor: 'bgc1',
};

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
}: Characters) {
  return `${body}|${eyes}|${facialHair}|${hair}|${mouth}|${nose}|${backgroundColor}|${skinColor}|${hairColor}|${facialHairColor}|${bodyColor}`;
}

export function parseCharacters(characters: string): Characters {
  const array = characters.split('|');
  if (array.length < 11) {
    console.log('Invalid characters.');
    return DEFAULT_CHARACTERS;
  }
  return {
    body: array[0] as Characters['body'],
    eyes: array[1] as Characters['eyes'],
    facialHair: array[2] as Characters['facialHair'],
    hair: array[3] as Characters['hair'],
    mouth: array[4] as Characters['mouth'],
    nose: array[5] as Characters['nose'],
    backgroundColor: array[6] as Characters['backgroundColor'],
    skinColor: array[7] as Characters['skinColor'],
    hairColor: array[8] as Characters['hairColor'],
    facialHairColor: array[9] as Characters['facialHairColor'],
    bodyColor: array[10] as Characters['bodyColor'],
  };
}

export const random = (array: any[]) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
