/** @jsx jsx */
import { jsx } from '@emotion/react';

interface IChildren {
  content: any;
}

const ContBlog = () => {
  // 여기 문제 있음
  return <div>{children}</div>;
};

export default ContBlog;
