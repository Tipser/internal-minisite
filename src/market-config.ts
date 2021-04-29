export enum Market {
  US = 'us',
  DE = 'de',
  SE = 'se',
}

export const marketParamValues = Object.values(Market).join('|');

type Config = {
  posId: string;
  contentfulId: string;
};

export const marketConfig: { [key in Market]: Config } = {
  us: {
    posId: '5f738fdd023072000132ae3b',
    contentfulId: '7sl4asGO6p0St5zOT5XFeH',
  },
  de: {
    posId: '608592003d2afe4c160b2e2b',
    contentfulId: '7zz06pIMJWXNnsaAmflEQ1',
  },
  se: {
    posId: '608592360836fd5e9ab0eed4',
    contentfulId: '4ngvsTZTJPHNQhD2ffzL3Q',
  },
};
