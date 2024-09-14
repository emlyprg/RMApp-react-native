import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const CharactersListStyle = StyleSheet.create({
  listTitle: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
    color: colors.Green,
    textShadowColor: 'rgba(232,154,199, 0.7)',
    textShadowOffset: {width: -1, height: 2},
    textShadowRadius: 10,
  },
  cardContainer: {
    marginVertical: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
