import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {CharactersListStyle} from '../components/styles/CharactersList';
import {mocks} from '../components/mock';
import {CharacterCard} from '../components/CharacterCard';

export const CharactersListPage = () => {
  return (
    <View>
      <Text style={CharactersListStyle.listTitle}>
        Rick and Morty Characters
      </Text>

      <FlatList
        style={{margin: 16}}
        data={mocks}
        numColumns={2}
        keyExtractor={(item, index) => item.id + `${index}`}
        renderItem={({item}) => (
          <View style={CharactersListStyle.cardContainer}>
            <CharacterCard character={item} />
          </View>
        )}
      />
    </View>
  );
};
