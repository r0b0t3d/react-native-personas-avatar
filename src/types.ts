import { backgroundColors } from './constants/background';
import { bodies, bodyColors } from './constants/body';
import { eyeses } from './constants/eyes';
import { facialHairColors, facialHairs } from './constants/facial-hair';
import { hairColors, hairs } from './constants/hair';
import mouths from './constants/mouth';
import noses from './constants/nose';
import { skinColors } from './constants/skin';

export type Characters = {
  skinColor: keyof typeof skinColors;
  hair: keyof typeof hairs;
  hairColor: keyof typeof hairColors;
  body: keyof typeof bodies;
  bodyColor: keyof typeof bodyColors;
  facialHair: keyof typeof facialHairs;
  facialHairColor: keyof typeof facialHairColors;
  eyes: keyof typeof eyeses;
  mouth: keyof typeof mouths;
  nose: keyof typeof noses;
  backgroundColor: keyof typeof backgroundColors;
};
