# Simple react scroller hook

### Install

```sh
  yarn add adelgu-react-scroller
```

### Usage

```javasript
  import { useScroller } from 'adelgu-react-scroller';

  export const useScrollerExample = () => {
  const scroller = useScroller({ y: 200, isSmooth: true });

    return (
      <div style={{ height: 3000 }}>
        <button onClick={scroller}>Click</button>
      </div>
    );
  };
```
