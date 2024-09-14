import {isIOS} from '../utils/isIOS ';

export const fontFamilies = {
  CHAKRAPETCH: {
    light: isIOS() ? 'ChakraPetch-Light' : 'ChakraPetchLight',
    normal: isIOS() ? 'ChakraPetch-Regular' : 'ChakraPetchRegular',
    medium: isIOS() ? 'ChakraPetch-Medium' : 'ChakraPetchMedium',
    bold: isIOS() ? 'ChakraPetch-Bold' : 'ChakraPetchBold',
  },
  MONTSERRAT: {
    light: isIOS() ? 'Montserrat-Light' : 'MontserratLight',
    normal: isIOS() ? 'Montserrat-Regular' : 'MontserratRegular',
    medium: isIOS() ? 'Montserrat-Medium' : 'MontserratMedium',
    bold: isIOS() ? 'Montserrat-Bold' : 'MontserratBold',
  },
};
