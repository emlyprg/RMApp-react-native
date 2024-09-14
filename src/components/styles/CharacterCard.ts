import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/fontFamily';
import {colors} from '../../constants/colors';

export const CharacterCardStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.Brown,
    borderRadius: 4,
    width: 180,
    paddingBottom: 12,
    paddingRight: 8,
  },
  characterName: {
    paddingVertical: 6,
    color: colors.Green,
    fontSize: 22,
    fontFamily: getFontFamily(true, 'bold'),
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
    color: colors.Brown,
  },
});
