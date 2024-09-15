import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';

export const OtherCharactersDetailStyle = StyleSheet.create({
  closeModalButton: {
    backgroundColor: colors.Gray,
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 80,
  },
  openModalButton: {
    backgroundColor: colors.White,
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
