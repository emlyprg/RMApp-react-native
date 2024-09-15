import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {mockedCharacters} from './src/mock';
import {FavoriteCharactersProvider} from './src/contexts/favoriteCharacters';
import {CharactersListGrid} from './src/components/CharactersListGrid';

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Character Details"
    //       component={CharacterDetailsPage}
    //       options={{character: mockedSingleCharacter}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <FavoriteCharactersProvider>
      <CharactersListGrid
        characters={mockedCharacters}
        pageTitle="Rick and Morty Characters"
      />
    </FavoriteCharactersProvider>
  );
};

export default App;
