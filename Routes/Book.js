import React from 'react'
import Header from '../components/Header';
import Logo from '../components/Logo';
import { SafeAreaView , Text } from 'react-native';
import { styles } from "../components/styles"



const Book = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text>Welcome to the Book Screen</Text>
      <Header />
    </SafeAreaView>
  )
}

export default Book