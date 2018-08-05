import morse from './morse';

it('returns undefined morse sequence for unsupported chars', () => {
  expect(morse.toMorse('!')).toBe(undefined);
});

it('returns undefined char for unsupported morse sequences', () => {
  expect(morse.toChar('------')).toBe(undefined);
});

it('returns a symbol "-" for DAH', () => {
  expect(morse.DAH).toBe('-');
});

it('returns a symbol "." for DIT', () => {
  expect(morse.DIT).toBe('.');
});

it('returns a char "s" for morse sequence "..."', () => {
  expect(morse.toChar('...')).toBe('s');
});

it('returns morse sequence "---" for char "o"', () => {
  expect(morse.toMorse('o')).toBe('---');
});
