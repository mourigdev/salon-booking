import React from "react";
import { Pressable ,  Modal , Text, View  } from 'react-native';
import ModalTextInput from './ModalTextInput';
import { styleModal } from "./Style.ModalView"

const ModalView = ({modalVisible,ModalHandeler}) => {


  return ( 
    <Modal
    style={[styleModal.centeredView,styleModal.modalback]}
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      ModalHandeler();
    }}>
    <View style={[styleModal.centeredView,styleModal.modalback]}>
      <View style={styleModal.closeParrent}>
        <Pressable
          onPress={() => ModalHandeler()}>
          <Text style={styleModal.textStyle}>Close</Text>
        </Pressable>
      </View>
      <View style={styleModal.TextInputParent}>
      <ModalTextInput />
      </View>
    </View>
  </Modal>
   );
}
 
export default ModalView;