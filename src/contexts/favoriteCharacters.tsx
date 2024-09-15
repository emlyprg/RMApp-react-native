import {createContext, PropsWithChildren, useContext, useState} from 'react';
import {Character} from '../types/Character';

export const FavoriteCharactersContext = createContext({});

export const FavoriteCharactersProvider = ({children}: PropsWithChildren) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);

  const addToFavorites = (newCharacter: Character) =>
    setFavoriteCharacters(prev => [...prev, newCharacter]);

  const removeFromFavorites = (id: number) => {
    const filteredCharacters = favoriteCharacters.filter(
      character => character.id !== id,
    );
    setFavoriteCharacters(filteredCharacters);
  };

  const getIsAddedToFavorites = (id: number) => {
    const character = favoriteCharacters.find(cha => cha.id === id);
    return Boolean(character);
  };

  const value = {
    favoriteCharacters,
    addToFavorites,
    removeFromFavorites,
    getIsAddedToFavorites,
  };

  return (
    <FavoriteCharactersContext.Provider value={value}>
      {children}
    </FavoriteCharactersContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteCharactersContext);
