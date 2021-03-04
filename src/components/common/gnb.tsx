/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useThemeState } from 'context/theme';

const gnbDatas = [
  {
    label: '소개',
    path: '/introduce'
  },
  {
    label: '블로그',
    path: '/blog'
  }
];

const Gnb = () => {
  const { colors } = useThemeState();
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
            href='/'
            css={{
              display: 'block',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '40px'
            }}
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
                      color: colors.black_american_river,
                      '&:hover': {
                        color: colors.black
                      }
                    }}
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
