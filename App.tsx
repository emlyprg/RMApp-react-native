import React from 'react';
import {CharacterDetailsPage} from './src/pages/CharacterDetailsPage';
import {mock} from './src/components/mock';

const App = () => {
  return <CharacterDetailsPage character={mock} />;
  // return <CharactersListPage />;
};

export default App;
