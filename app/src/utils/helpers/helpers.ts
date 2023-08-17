export const createArray = (start: number, stop: number, step = 1) => {
  const length = Math.floor(Math.abs((stop - start) / step)) + 1;
  const direction = Math.sign(stop - start);
  return Array.from({ length }, (_, i) => start + i * step * direction);
};
