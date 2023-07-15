import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Your StyleSync',
    icons: <FavoriteBorderOutlinedIcon />,
    link: 'Home'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Explore',
    icons: <SearchOutlinedIcon />,
    link: 'Search'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Appointments',
    icons: <CalendarMonthOutlinedIcon />,
    link: 'Book'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145451e29d72',
    title: 'Profile',
    icons: <Person2OutlinedIcon />,
    link: 'Profile'
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' , color: "#fff" }}>
    {item.icons}
    <Text style={{color: "#fff" , fontWeight: "bold" , paddingTop:"0.5rem"}}>{item.title}</Text>
  </TouchableOpacity>
);

const Header = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate(item.link);
  };

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => handlePress(item)} />;
  };

  return (
    <SafeAreaView
      style={{ position: 'fixed', width: '100%', backgroundColor: 'black' , bottom: 0, padding: '1rem' }}
    >
      <FlatList
        contentContainerStyle={styles.list}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Header;
