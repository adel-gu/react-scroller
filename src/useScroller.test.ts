import { useScroller } from './useScroller';

test('Should scrollTo a position:', () => {
  const spy = jest.spyOn(window, 'scrollTo').mockImplementation();

  const scroll = useScroller({ x: 50, y: 0 });
  if (!scroll) {
    throw 'Invalid window object';
  }

  scroll();

  expect(spy).toHaveBeenCalledWith({
    left: 50,
    top: 0,
    behavior: 'auto',
  });

  spy.mockRestore();
});
