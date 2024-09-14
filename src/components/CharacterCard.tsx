import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Character} from './types/Character';
import {CharacterCardStyle} from './styles/CharacterCard';
interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({character}: CharacterCardProps) => {
  return (
    <View style={CharacterCardStyle.container}>
      <Image
        source={{uri: character.image}}
        style={{width: 177, height: 100}}
      />

      <View style={CharacterCardStyle.propertyRow}>
        <Text style={CharacterCardStyle.characterName}>{character.name}</Text>
      </View>

      <View style={CharacterCardStyle.propertyRow}>
        <Text style={CharacterCardStyle.propertyLabel}>Status:</Text>
        <Text style={CharacterCardStyle.propertyValue}>{character.status}</Text>
      </View>

      <View style={CharacterCardStyle.propertyRow}>
        <Text style={CharacterCardStyle.propertyLabel}>Species:</Text>
        <Text style={CharacterCardStyle.propertyValue}>
          {character.species}
        </Text>
      </View>

      <View style={CharacterCardStyle.propertyRow}>
        <Text style={CharacterCardStyle.propertyLabel}>Gender:</Text>
        <Text style={CharacterCardStyle.propertyValue}>{character.gender}</Text>
      </View>

      <View style={CharacterCardStyle.propertyRow}>
        <Text style={CharacterCardStyle.propertyLabel}>Location:</Text>
        <Text style={CharacterCardStyle.propertyValue}>
          {character.location.name}
        </Text>
      </View>

      <View style={CharacterCardStyle.propertyRow}>
        <Text style={CharacterCardStyle.propertyLabel}>Episodes:</Text>
        {/* <Text>{character.episode}</Text> */}
      </View>

      <Pressable style={CharacterCardStyle.seeMoreButton} onPress={() => true}>
        <Text style={CharacterCardStyle.seeMoreButtonLabel}>See more</Text>
      </Pressable>
    </View>
  );
};
