import React , { useState } from 'react'
import Header from './Header';
import Logo from './Logo';
import { SafeAreaView , Pressable ,  Modal , Text, View , TextInput } from 'react-native';
import { styles } from "./styles"


const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View style={{padding: "1rem"  , backgroundColor: "#FF6668"}}>
        <Text style={{color: "white" , fontWeight: "bold"}}>Behind every</Text>
        <Text style={{paddingLeft:"1rem" , color: "white" , fontWeight: "bold"}}>appointment</Text>
        <View style={{marginTop: "1rem" , padding:"1rem" , backgroundColor: "#fff"}}>
        <Pressable onPress={() => setModalVisible(true)}>
        <TextInput
          style={styles.input}
          // onFocus={() => setModalVisible(true)}
          placeholder="Message"
          keyboardType="default"
        /></Pressable>
        </View>
      </View>
      {/* modal */}

      <Header />


      <Modal
        style={[styles.centeredView,styles.modalback]}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.centeredView,styles.modalback]}>
          <View style={styles.closeParrent}>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
          <View style={styles.TextInputParent}>
          <TextInput
          style={styles.input}
          // onFocus={() => setModalVisible(true)}
          placeholder="Message"
          placeholderTextColor="rgb(175, 175, 175)"
          keyboardType="default"
        />
          </View>
        </View>
      </Modal>


    </SafeAreaView>
  )
}

export default Home