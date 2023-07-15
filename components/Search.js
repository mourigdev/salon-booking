import React from 'react'
import Header from './Header';
import Logo from './Logo';
import { SafeAreaView , Text } from 'react-native';
import { styles } from "./styles"



const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text>Welcome to the Search Screen</Text>
      <Header />
    </SafeAreaView>
  )
}

export default Search