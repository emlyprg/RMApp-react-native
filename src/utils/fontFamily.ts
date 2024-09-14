import {fontFamilies} from '../constants/fonts';

export const getFontFamily = (
  isLTR: boolean,
  weight: 'light' | 'normal' | 'medium' | 'bold',
) => {
  const selectedFontFamily = isLTR
    ? fontFamilies.CHAKRAPETCH
    : fontFamilies.MONTSERRAT;
  return selectedFontFamily[weight];
};
