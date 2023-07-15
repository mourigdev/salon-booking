import React , { useState } from 'react'
import { SafeAreaView , Pressable  , Text, View , TextInput } from 'react-native';
import { styles } from "./styles"
// Components
import Header from './Header';
import Logo from './Logo';
import ModalView from "./ModalView";



const Home = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const ModalHandeler = () =>{
    setModalVisible(!modalVisible)
  }

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
          placeholder="Message"
          keyboardType="default"
        /></Pressable>
        </View>
      </View>
      <Header />
      {/* modal */}
      <ModalView modalVisible={modalVisible} ModalHandeler={ModalHandeler}/>
    </SafeAreaView>
  )
}

export default Home