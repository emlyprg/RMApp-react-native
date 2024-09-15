import React from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {CharactersListStyle} from '../styles/CharactersList';
import {mockedCharacters} from '../components/mock';
import {CharacterCard} from '../components/CharacterCard';

const imagePath = {
  uri: 'https://png.pngtree.com/background/20210715/original/pngtree-star-space-universe-space-infinite-background-picture-image_1303830.jpg',
};

export const CharactersListPage = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={imagePath}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <Text style={CharactersListStyle.listTitle}>
          Rick <Text style={{fontSize: 24}}>and</Text> Morty Characters
        </Text>

        <FlatList
          style={{margin: 16}}
          data={mockedCharacters}
          numColumns={2}
          keyExtractor={(item, index) => item.id + `${index}`}
          renderItem={({item}) => (
            <View style={CharactersListStyle.cardContainer}>
              <CharacterCard character={item} />
            </View>
          )}
        />
      </ImageBackground>
    </View>
  );
};
