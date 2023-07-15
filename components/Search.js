import React from 'react'
import Header from './Header';
import Logo from './Logo';
import SearchI from './SearchI'
import { SafeAreaView , Text } from 'react-native';
import { styles } from "./styles"



const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text>Welcome to the Search Screen</Text>
      <Header />
      <SearchI />
    </SafeAreaView>
  )
}

export default Search