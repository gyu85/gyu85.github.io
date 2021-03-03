/** @jsx jsx */
import { jsx } from '@emotion/react';

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
  return (
    <div>
      <h1>
        <a href='/'>GYU Blog</a>
      </h1>
      <ul>
        {gnbDatas.reduce(
          (target: JSX.Element[], gnbData: any, index: number) => {
            const { label, path } = gnbData;
            target.push(
              <li key={index}>
                <a href='#none' data-path={path}>
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
  );
};

export default Gnb;
