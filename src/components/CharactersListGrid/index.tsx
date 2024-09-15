import React from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {CharacterCard} from '../../components/CharacterCard/CharacterCard';
import {CharactersListGridStyle} from './styles';
import {Character} from '../../types/Character';

const imagePath = {
  uri: 'https://png.pngtree.com/background/20210715/original/pngtree-star-space-universe-space-infinite-background-picture-image_1303830.jpg',
};

interface CharactersListGridProps {
  characters: Character[];
  pageTitle: string;
}

export const CharactersListGrid = ({
  characters,
  pageTitle,
}: CharactersListGridProps) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={imagePath}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <Text style={CharactersListGridStyle.listTitle}>{pageTitle}</Text>

        <FlatList
          style={{margin: 16}}
          data={characters}
          numColumns={2}
          keyExtractor={(item, index) => item.id + `${index}`}
          renderItem={({item}) => (
            <View style={CharactersListGridStyle.cardContainer}>
              <CharacterCard character={item} />
            </View>
          )}
        />
      </ImageBackground>
    </View>
  );
};
