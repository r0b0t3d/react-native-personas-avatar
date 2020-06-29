import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import { skinColors } from './assets/skin';
import { hairs, hairColors } from './assets/hair';
import { facialHairs, facialHairColors } from './assets/facial-hair';
import { bodies, bodyColors } from './assets/body';
import { eyeses } from './assets/eyes';
import mouths from './assets/mouth';
import noses from './assets/nose';
import { backgroundColors } from './assets/background';

type State = {
  skinColor: string;
  hair: string;
  hairColor: string,
  facialHair: string;
  facialHairColor: string;
  body: string;
  bodyColor: string;
  eyes: string;
  mouth: string;
  nose: string;
  backgroundColor: string;
};

const initialState: State = {
  skinColor: '',
  hair: '',
  hairColor: '',
  facialHair: '',
  facialHairColor: '',
  body: '',
  bodyColor: '',
  eyes: '',
  mouth: '',
  nose: '',
  backgroundColor: ''
};

const initialContext: [State, Function] = [{ ...initialState }, () => {}];

export const AvatarContext = React.createContext(initialContext);

const random = (array: any[]) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'random':
      return {
        skinColor: random(Object.keys(skinColors)),
        hair: random(Object.keys(hairs)),
        hairColor: random(Object.keys(hairColors)),
        facialHair: random(Object.keys(facialHairs)),
        facialHairColor: random(Object.keys(facialHairColors)),
        body: random(Object.keys(bodies)),
        bodyColor: random(Object.keys(bodyColors)),
        eyes: random(Object.keys(eyeses)),
        mouth: random(Object.keys(mouths)),
        nose: random(Object.keys(noses)),
        backgroundColor: random(Object.keys(backgroundColors)),
      };
    case 'add':
      return { ...state, articles: [...state.articles, action.article] };
    case 'delete':
      const articles = [...state.articles];
      const filteredArticles = articles.filter(article => article.id !== action.articleId);
      return { ...state, articles: filteredArticles };
    default:
      throw new Error('Unrecognized action');
  }
};

export function AvatarController(props) {
  const [avatarState, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [avatarState, dispatch], [avatarState]);

  // @ts-ignore
  return <AvatarContext.Provider value={value}>{props.children}</AvatarContext.Provider>;
}

AvatarController.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
