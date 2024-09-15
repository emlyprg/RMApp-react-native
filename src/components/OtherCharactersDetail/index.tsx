import React from 'react';
import {useState} from 'react';
import {FlatList, Image, Modal, Pressable, Text, View} from 'react-native';
import {Character} from '../../types/Character';
import {OtherCharactersDetailStyle} from './styles';

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
        <View style={OtherCharactersDetailStyle.container}>
          <View style={OtherCharactersDetailStyle.titleContainer}>
            <Text style={OtherCharactersDetailStyle.modalTitle}>
              Other characters
            </Text>

            <Pressable
              onPress={() => setModalVisible(false)}
              style={OtherCharactersDetailStyle.closeModalButton}>
              <Text style={OtherCharactersDetailStyle.closeButtonText}>
                Close
              </Text>
            </Pressable>
          </View>

          <FlatList
            data={characters}
            numColumns={3}
            renderItem={({item}) => (
              <View style={OtherCharactersDetailStyle.characterItemContainer}>
                <Image
                  key={item.id}
                  source={{uri: item.image}}
                  style={OtherCharactersDetailStyle.characterImage}
                />
                <Text style={OtherCharactersDetailStyle.characterName}>
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
        <Text style={OtherCharactersDetailStyle.openModalButtonText}>
          See other characters
        </Text>
      </Pressable>
    </View>
  );
};
