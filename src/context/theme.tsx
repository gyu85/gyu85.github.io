import React, { createContext, Dispatch, useReducer, useContext } from 'react';

import { mediaQuery } from 'utils/validate';

export interface IThemeState {
  colors: {
    background_default: string;
    background_blue_dark: string;
    background_gray: string;
    background_gray_dark: string;
    background_gray_dark2: string;

    brand_violet: string;
    brand_yellow: string;
    brand_cyan: string;

    black: string;

    heather: string;

    blue: string;
    blue_cold: string;
    blue_dark: string;
    blue_light: string;
    blue_minsk: string;
    blue_solitude: string;

    pink: string;

    red: string;
    red_light: string;
    redish_magenta: string;

    violet: string;
    violet_light: string;
    violet2: string;

    yellow: string;
    yellow2: string;
    yellow_light: string;
    yellow20: string;

    lavender: string;
    cyan_bold: string;
    blush_cyan: string;

    gray100: string;
    gray95: string;
    gray90: string;
    gray80: string;
    gray70: string;
    gray60: string;
    gray50: string;
    gray40: string;
    gray30: string;
    gray20: string;
    gray10: string;
    gray05: string;
    grayRgba30: string;
    gray_light: string;
    gray_empress: string;
    gray: string;

    white: string;
    white05: string;
    white10: string;
    white31: string;
    white72: string;

    white_titan: string;
    white_ghost: string;
  };
  transition: {
    sec: string;
    easing: string;
  };
  mq: {
    mobile: string;
    tablet: string;
  };
}

const ThemeStateContext = createContext<IThemeState | undefined>(undefined);

type IThemeAction = { type: 'GET' };

type ThemeDispatch = Dispatch<IThemeAction>;

const ThemeDispatchContext = createContext<ThemeDispatch | undefined>(
  undefined
);

const getInitialValues = (): IThemeState => {
  return {
    colors: {
      background_default: '#FFF',
      background_blue_dark: '#2d2b6b',
      background_gray: '#f9faf9',
      background_gray_dark: '#f5f6f7',
      background_gray_dark2: '#f5f5f5',

      brand_violet: '#9b0182',
      brand_yellow: '#fccf00',
      brand_cyan: '#36bad1',

      black: '#252525',

      heather: '#adb5bd',

      blue: '#22a5f7',
      blue_cold: '#2c2d64',
      blue_dark: '#2d2b6b',
      blue_light: '#6055D4',
      blue_minsk: '#323385',
      blue_solitude: '#F4F4F7',

      pink: '#f55656',

      red: '#f55656',
      red_light: '#f75552',
      redish_magenta: '#d5b3d0',

      violet: '#9c2088',
      violet_light: '#f9eef7',
      violet2: '#ad4e9a',

      yellow: '#fdd000',
      yellow2: '#fdb200',
      yellow_light: '#ffe796',
      yellow20: 'rgba(253, 208, 0, 0.2)',

      lavender: '#ebebfe',
      cyan_bold: '#21b7cf',
      blush_cyan: '#8ac7d1',

      gray100: '#151b2c',
      gray95: '#212737',
      gray90: '#2c3141',
      gray80: '#444956',
      gray70: '#5b5f6b',
      gray60: '#85919d',
      gray50: '#8a8d95',
      gray40: '#a1a4ab',
      gray30: '#bcbcc6',
      gray20: '#d6dade',
      gray10: '#e7e8e9',
      gray05: '#f5f6f7',
      grayRgba30: 'rgba(187, 180, 196, 0.3)',
      gray_light: '#e5e5e5',
      gray_empress: '#757575',
      gray: '#e7e7e7',

      white: '#FFF',
      white05: 'rgba(255,255,255,0.05)',
      white10: 'rgba(255,255,255,0.1)',
      white31: 'rgba(255,255,255,0.31)',
      white72: 'rgba(255,255,255,0.72)',

      white_titan: '#f6f6ff',
      white_ghost: '#fafaff'
    },
    transition: {
      sec: '0.36s',
      easing: 'ease-out'
    },
    mq: {
      mobile: mediaQuery('max-width:700px'),
      tablet: mediaQuery('max-width:1024px')
    }
  };
};

function reducer(state: IThemeState, action: IThemeAction) {
  switch (action.type) {
    case 'GET':
      return state;

    default:
      throw new Error('Unhandled action');
  }
}

export const ThemeContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, getInitialValues());

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeStateContext.Provider value={state}>
        {children}
      </ThemeStateContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};

export const useThemeState = () => {
  const state = useContext(ThemeStateContext);

  if (state) {
    return state;
  } else {
    throw new Error('not-found theme-state');
  }
};

export const useThemeDispatch = () => {
  const dispatch = useContext(ThemeDispatchContext);

  if (dispatch) {
    return dispatch;
  } else {
    throw new Error('not-found theme-dispatch');
  }
};
