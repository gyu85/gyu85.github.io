import React from 'react';
import { Global } from '@emotion/react';
import { ThemeContextProvider } from 'context/theme';

import NotoSansKRLightWoff from './assets/font/NotoSansKR-Light-Hestia.woff';
import NotoSansKRRegularWoff from './assets/font/NotoSansKR-Regular-Hestia.woff';
import NotoSansKRMediumWoff from './assets/font/NotoSansKR-Medium-Hestia.woff';
import NotoSansKRBoldWoff from './assets/font/NotoSansKR-Bold-Hestia.woff';

import Wrapper from 'containers/wrapper';

function App() {
  return (
    <ThemeContextProvider>
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'NotoSans',
            src: `url(${NotoSansKRRegularWoff}) format('woff')`,
            fontWeight: 400
          }
        }}
      />
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'NotoSans',
            src: `url(${NotoSansKRLightWoff}) format('woff')`,
            fontWeight: 300
          }
        }}
      />
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'NotoSans',
            src: `url(${NotoSansKRMediumWoff}) format('woff')`,
            fontWeight: 500
          }
        }}
      />
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'NotoSans',
            src: `url(${NotoSansKRBoldWoff}) format('woff')`,
            fontWeight: 700
          }
        }}
      />
      <Global
        styles={{
          'body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,form,fieldset,legend,textarea,p,th,td,input,select,textarea,button': {
            margin: 0,
            padding: 0
          },
          'fieldset, img': { border: 0 },
          'dl,ul,ol,menu,li': { listStyle: 'none' },
          'blockquote, q': { quotes: 'none' },
          'input, select, textarea, button': {
            verticalAlign: 'middle',
            '@media (max-width:700px)': {
              fontSize: '100%'
            }
          },
          button: {
            border: 0,
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '@media (max-width:700px)': {
              appearance: 'button',
              borderRadius: 0
            }
          },
          em: {
            fontStyle: 'normal',
            fontWeight: 'normal'
          },
          body: {
            background: '#fff',
            '@media (max-width:700px)': {
              textSizeAdjust: 'none'
            }
          },
          'body, th, td, input, select, textarea, button': {
            fontSize: '14px',
            lineHeight: 1.5,
            fontWeight: 400,
            fontFamily:
              'NotoSans, Apple SD Gothic Neo,Malgun Gothic,맑은 고딕,Helvetica, sans-serif',
            color: '#252525'
          },
          a: {
            color: '#252525',
            textDecoration: 'none',
            '&:active, &:hover': { textDecoration: 'none' }
          },
          address: {
            fontStyle: 'normal',
            fontWeight: 'normal'
          },
          '@media (max-width:1024px)': {
            'html, body, #root': {
              height: '100%'
            }
          },
          '@media (max-width:700px)': {
            'input[type="text"], input[type="password"], input[type="submit"], input[type="search"]': {
              appearance: 'none',
              borderRadius: 0
            },
            'input:checked[type="checkbox"]': {
              backgroundColor: '#666',
              appearance: 'checkbox'
            },
            'input[type="button"], input[type="submit"], input[type="reset"], input[type="file"]': {
              appearance: 'button',
              borderRadius: 0
            },
            'input[type="search"]': {
              '&::-webkit-search-cancel-button': {
                appearance: 'none'
              }
            }
          },
          '.hidden': {
            overflow: 'hidden',
            position: 'absolute',
            width: 0,
            height: 0,
            lineHeight: 0,
            textIndent: '-9999px'
          },
          '.clear_g': {
            '&::after': {
              display: 'block',
              content: '""',
              clear: 'both'
            }
          }
        }}
      />
      <Wrapper />
    </ThemeContextProvider>
  );
}

export default App;
