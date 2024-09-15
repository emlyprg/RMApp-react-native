import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const OtherCharactersDetailStyle = StyleSheet.create({
  container: {padding: 16, backgroundColor: colors.White},
  modalTitle: {color: colors.Gray, fontSize: 28, fontWeight: 'bold'},
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  characterItemContainer: {margin: 10},
  openModalButtonText: {color: colors.Brown, fontWeight: 'bold'},
  closeButtonText: {color: colors.White, fontWeight: 'bold'},
  characterImage: {width: 100, height: 100, borderRadius: 8, marginBottom: 2},
  characterName: {color: colors.Brown, fontWeight: 'bold', textAlign: 'center'},
});
