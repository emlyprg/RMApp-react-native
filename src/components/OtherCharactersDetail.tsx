import React from 'react';
import {useState} from 'react';
import {FlatList, Image, Modal, Pressable, Text, View} from 'react-native';
import {colors} from '../constants/colors';
import {Character} from './types/Character';
import {OtherCharactersDetailStyle} from '../styles/OtherCharactersDetail';

interface OtherCharactersDetailProps {
  characters: Character[];
}

export const OtherCharactersDetail = ({
  characters,
}: OtherCharactersDetailProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            padding: 16,
            backgroundColor: colors.White,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{color: colors.Gray, fontSize: 28, fontWeight: 'bold'}}>
              Other characters
            </Text>

            <Pressable
              onPress={() => setModalVisible(false)}
              style={OtherCharactersDetailStyle.closeModalButton}>
              <Text style={{color: colors.White, fontWeight: 'bold'}}>
                Close
              </Text>
            </Pressable>
          </View>

          <FlatList
            data={characters}
            numColumns={3}
            renderItem={({item}) => (
              <View style={{margin: 10}}>
                <Image
                  key={item.id}
                  source={{uri: item.image}}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 8,
                    marginBottom: 2,
                  }}
                />
                <Text
                  style={{
                    color: colors.Brown,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
              </View>
            )}
          />
        </View>
      </Modal>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={OtherCharactersDetailStyle.openModalButton}>
        <Text style={{color: colors.Brown, fontWeight: 'bold'}}>
          See other characters
        </Text>
      </Pressable>
    </View>
  );
};
