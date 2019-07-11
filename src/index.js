import cssVars from 'css-vars-ponyfill';
import LIGHT from './light';
import DARK from './dark';

const setTheme = (set = DARK) => {
  cssVars({
    variables: set,
  });
}

export {
  LIGHT,
  DARK,
  setTheme,
};
