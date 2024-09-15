import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const CharacterCardStyle = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.White,
    borderRadius: 8,
    width: 180,
    paddingBottom: 12,
    paddingRight: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  image: {
    width: 177,
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  characterName: {
    paddingVertical: 6,
    color: colors.Green,
    fontSize: 22,
    fontWeight: 'bold',

    margin: 'auto',
  },
  propertyRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 3,
    paddingLeft: 8,
    paddingVertical: 1,
  },
  propertyLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.Brown,
  },
  propertyValue: {
    color: colors.Black,
    width: 90,
  },
  seeMoreButton: {
    marginHorizontal: 8,
    marginTop: 12,
    backgroundColor: colors.Green,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  seeMoreButtonLabel: {
    fontWeight: 'bold',
    color: colors.Black,
  },
});
