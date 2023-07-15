import React, { useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';

const SearchI = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  const arrayNew = [
    { name: 'Robert' },
    { name: 'Bryan' },
    { name: 'Vicente' },
    { name: 'Tristan' },
    { name: 'Marie' },
    { name: 'Onni' },
    { name: 'sophie' },
    { name: 'Brad' },
    { name: 'Samual' },
    { name: 'Omur' },
    { name: 'Ower' },
    { name: 'Awery' },
    { name: 'Ann' },
    { name: 'Jhone' },
    { name: 'z' },
    { name: 'bb' },
    { name: 'cc' },
    { name: 'd' },
    { name: 'e' },
    { name: 'f' },
    { name: 'g' },
    { name: 'h' },
    { name: 'i' },
    { name: 'j' },
    { name: 'k' },
    { name: 'React' },
    { name: 'React native' },
    { name: 'react navigations' },
  ];

  const renderSeparator = () => (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
      }}
    />
  );

  const searchItems = (text) => {
    let newData = arrayNew.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      if (text.length > 0) {
        return itemData.indexOf(textData) > -1;
      }
    });
    setData(newData);
    setValue(text);
  };

  const renderHeader = () => (
    <TextInput
      style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
      placeholder="   Type Name..."
      onChangeText={(text) => searchItems(text)}
      value={value}
    />
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 25,
        width: '98%',
        alignSelf: 'center',
        justifyContent: 'center',
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={{ padding: 10 }}>{item.name} </Text>}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default SearchI;
