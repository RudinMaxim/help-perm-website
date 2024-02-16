export const newUuid = (): string => {
  const COUNT_SYMBOLS = 64;
  let uuid = '';

  for (let i = 0; i < COUNT_SYMBOLS; i++) {
    uuid += randomSymbols();
  }

  return uuid;
};

const randomSymbols = (): string => {
  return getSymbol(Math.floor(Math.random() * 36));
};

const getSymbol = (i: number): string => {
  const ARRAY_SYMBOLS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  return ARRAY_SYMBOLS[i];
};
