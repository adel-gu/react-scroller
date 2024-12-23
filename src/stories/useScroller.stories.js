import React from 'react';
import { useScroller } from '../useScroller';

export default {
  title: 'UseScroller',
};

export const useScrollerExample = () => {
  const scroller = useScroller({ y: 200, isSmooth: true });

  return (
    <div style={{ height: 3000 }}>
      <button onClick={scroller}>Click</button>
    </div>
  );
};
