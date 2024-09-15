import React from 'react';
import {CharacterDetailsPage} from './src/pages/CharacterDetails';
import {mockedSingleCharacter} from './src/mock';

const App = () => {
  return <CharacterDetailsPage character={mockedSingleCharacter} />;
};

export default App;
