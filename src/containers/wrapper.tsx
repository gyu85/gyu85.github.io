/** @jsx jsx */
import { jsx } from '@emotion/react';

const Wrapper = () => {
  return (
    <div>
      <p>Wrapper</p>
      <p
        css={{
          fontWeight: 500
        }}
      >
        Wrapper
      </p>
      <p
        css={{
          fontWeight: 700
        }}
      >
        Wrapper
      </p>
      <p
        css={{
          fontWeight: 300
        }}
      >
        Wrapper
      </p>
    </div>
  );
};

export default Wrapper;
