import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {SingleCharacterProp} from '../../types/Character';
import {formatDate} from '../../utils/formatDate';
import {mockedCharacters, mockedEpisodes} from '../../mock';
import {DefaultText} from '../../components/DefaultText';
import {EpisodeDetail} from '../../components/EpisodeDetail';
import {CharacterDetailsPageStyle} from './styles';

export const CharacterDetailsPage = ({character}: SingleCharacterProp) => {
  return (
    <ScrollView style={CharacterDetailsPageStyle.pageContainer}>
      <Text style={CharacterDetailsPageStyle.pageTitle}>{character.name}</Text>

      <Image
        source={{uri: character.image}}
        style={CharacterDetailsPageStyle.image}
      />

      <Text style={CharacterDetailsPageStyle.subtitle}>Character Details</Text>

      <View style={CharacterDetailsPageStyle.characterDetailsContainer}>
        <DefaultText content={`Type ${character.type}`} />
        <DefaultText content={`Status ${character.status}`} />
        <DefaultText content={`${character.species}`} />
        <DefaultText content={`${character.gender}`} />
        <DefaultText content={`From ${character.origin.name}`} />
        <DefaultText content={`Located at ${character.location.name}`} />
        <DefaultText content={`Created at ${formatDate(character.created)}`} />
      </View>

      <Text style={CharacterDetailsPageStyle.subtitle}>Episodes</Text>

      <DefaultText content={`${character.episode.length} episodes`} />

      <View style={CharacterDetailsPageStyle.episodesContainer}>
        {mockedEpisodes.map(({name, id}) => (
          <EpisodeDetail name={name} characters={mockedCharacters} key={id} />
        ))}
      </View>
    </ScrollView>
  );
};
