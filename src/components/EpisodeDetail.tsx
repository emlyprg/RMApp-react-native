import React from 'react';
import {View} from 'react-native';
import {DefaultText} from './DefaultText';
import {CharactersListProp} from '../types/Character';
import {OtherCharactersDetail} from './OtherCharactersDetail';

interface EpisodeDetailProps extends CharactersListProp {
  name: string;
}

export const EpisodeDetail = ({name, characters}: EpisodeDetailProps) => (
  <View
    style={{
      gap: 8,
      height: 80,
      paddingTop: 16,
    }}>
    <DefaultText
      content={`${name}`}
      styles={{fontWeight: 'bold', textTransform: 'capitalize'}}
    />

    <OtherCharactersDetail characters={characters} />
  </View>
);
