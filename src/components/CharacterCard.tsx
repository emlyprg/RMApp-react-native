import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Character, Status} from './types/Character';
import {CharacterCardStyle} from '../styles/CharacterCard';
import {colors} from '../constants/colors';
import {getEpisodesNumbers} from '../utils/getEpisodesNumbers';
interface CharacterCardProps {
  character: Character;
}

const statusColor = {
  [Status.ALIVE]: colors.DarkGreen,
  [Status.DEAD]: colors.Red,
  [Status.UNKNOWN]: colors.Gray,
};

export const CharacterCard = ({character}: CharacterCardProps) => {
  return (
    <View style={CharacterCardStyle.container}>
      <Image source={{uri: character.image}} style={CharacterCardStyle.image} />

      <View style={CharacterCardStyle.propertyRow}>
        <Text style={CharacterCardStyle.characterName}>{character.name}</Text>
      </View>

      <View style={CharacterCardStyle.propertyRow}>
        <Text style={CharacterCardStyle.propertyLabel}>Status:</Text>
        <Text
          style={{
            ...CharacterCardStyle.propertyValue,
            color: statusColor[character.status],
          }}>
          {character.status}
        </Text>
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
        <Text>{getEpisodesNumbers(character.episode)}</Text>
      </View>

      <Pressable style={CharacterCardStyle.seeMoreButton} onPress={() => true}>
        <Text style={CharacterCardStyle.seeMoreButtonLabel}>See more</Text>
      </Pressable>
    </View>
  );
};
