import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import skins from './assets/skin';
import hairs from './assets/hair';
import facialHairs from './assets/facial-hair';
import bodies from './assets/body';
import eyeses from './assets/eyes';
import mouths from './assets/mouth';
import noses from './assets/nose';

type State = {
  skin: string;
  hair: string;
  facialHair: string;
  body: string;
  eyes: string;
  mouth: string;
  nose: string;
};

const initialState: State = {
  skin: 'headSkin3',
  hair: '',
  facialHair: '',
  body: '',
  eyes: '',
  mouth: '',
  nose: '',
};

const initialContext: [State, Function] = [{ ...initialState }, () => {}];

export const AvatarContext = React.createContext(initialContext);

const random = (array: any[]) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'random':
      return { 
        skin: random(Object.keys(skins)),
        hair: random(Object.keys(hairs)),
        facialHair: random(Object.keys(facialHairs)),
        body: random(Object.keys(bodies)),
        eyes: random(Object.keys(eyeses)),
        mouth: random(Object.keys(mouths)),
        nose: random(Object.keys(noses)),
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
