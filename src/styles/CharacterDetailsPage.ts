import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';

export const CharacterDetailsPageStyle = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.Black,
  },
  pageTitle: {
    color: colors.White,
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: colors.LightGreen,
  },
  subtitle: {
    fontSize: 22,
    color: colors.White,
    fontWeight: 'bold',
    paddingBottom: 8,
    paddingTop: 16,
  },
});
