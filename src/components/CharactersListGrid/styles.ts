import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const CharactersListGridStyle = StyleSheet.create({
  listTitle: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
    color: colors.LightGreen,
    textShadowColor: 'rgba(255,255,255, 0.7)',
    textShadowOffset: {width: -2, height: 3},
    textShadowRadius: 10,
  },
  cardContainer: {
    marginVertical: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
