import React from 'react';
import {useFavorites} from '../../contexts/favoriteCharacters';
import {Pressable, Text} from 'react-native';
import {colors} from '../../constants/colors';
import {SingleCharacterProp} from '../../types/Character';
import {FavoriteCharacterButtonStyle} from './styles';

export const FavoriteCharacterButton = ({character}: SingleCharacterProp) => {
  const {addToFavorites, removeFromFavorites, getIsAddedToFavorites} =
    useFavorites();

  const handleFavoritesButton = () =>
    getIsAddedToFavorites(character.id)
      ? removeFromFavorites(character.id)
      : addToFavorites(character);

  const getFavoritesButtonLabel = () =>
    getIsAddedToFavorites(character.id) ? 'Remove' : 'Add to favorites';

  return (
    <Pressable
      style={{
        ...FavoriteCharacterButtonStyle.button,
        backgroundColor: getIsAddedToFavorites(character.id)
          ? colors.Red
          : colors.Green,
      }}
      onPress={handleFavoritesButton}>
      <Text
        style={{
          fontWeight: 'bold',
          color: getIsAddedToFavorites(character.id)
            ? colors.White
            : colors.Black,
        }}>
        {getFavoritesButtonLabel()}
      </Text>
    </Pressable>
  );
};
