/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useThemeState } from 'context/theme';
import { useEffect } from 'react';

import { getDatasetByName } from 'utils/dom';
import { getPathHome, getPathBlog, getPathIntroduce } from 'utils/route';

const gnbDatas = [
  {
    label: '소개',
    path: getPathIntroduce()
  },
  {
    label: '블로그',
    path: getPathBlog()
  }
];

const Gnb = () => {
  const { colors } = useThemeState();

  const [activeIndex, setActiveIndex] = useState<any>({
    category: -1
  });

  const { categoryIndex } = activeIndex;

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    const { categoryIndex } = gnbDatas.reduce(
      (target: any, menu: any, index: number) => {
        const { path } = menu;
        const isMatched = pathname.indexOf(path) !== -1;

        switch (isMatched) {
          case true:
            target = {
              categoryIndex: index
            };
            break;
        }
        return target;
      },
      { categoryIndex: -1 }
    );

    setActiveIndex({ categoryIndex });
  }, [location]);

  const onClickMenu = (event: any) => {
    event.preventDefault();
    const path = getDatasetByName(event.currentTarget, 'path');
    window.scrollTo(0, 0);
    history.push(path);
  };

  return (
    <div
      css={{
        overflow: 'hidden',
        padding: '5px 32px',
        backgroundColor: colors.background_white
      }}
    >
      <div
        css={{
          overflow: 'hidden',
          width: '100%',
          maxWidth: '980px',
          height: '40px',
          margin: '0 auto'
        }}
      >
        <h1
          css={{
            float: 'left',
            height: '40px'
          }}
        >
          <a
            href='#none'
            data-path={getPathHome()}
            css={{
              display: 'block',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '40px'
            }}
            onClick={onClickMenu}
          >
            <span
              css={{
                fontWeight: 600,
                color: colors.blue_electron
              }}
            >
              GYU
            </span>{' '}
            Blog
          </a>
        </h1>
        <ul
          css={{
            float: 'right',
            fontSize: '20px'
          }}
        >
          {gnbDatas.reduce(
            (target: JSX.Element[], gnbData: any, index: number) => {
              const isActive: boolean = index === categoryIndex;
              const { label, path } = gnbData;
              target.push(
                <li
                  key={index}
                  css={{
                    float: 'left',
                    height: '40px'
                  }}
                >
                  <a
                    href='#none'
                    data-path={path}
                    css={{
                      display: 'block',
                      padding: '0 16px',
                      margin: `${index === 0 ? '0 8px 0 0' : '0 0 0 8px'}`,
                      lineHeight: '40px',
                      color: `${
                        isActive ? colors.black : colors.black_american_river
                      }`,
                      '&:hover': {
                        color: colors.black
                      }
                    }}
                    onClick={onClickMenu}
                  >
                    {label}
                  </a>
                </li>
              );

              return target;
            },
            [] as JSX.Element[]
          )}
        </ul>
      </div>
    </div>
  );
};

export default Gnb;
