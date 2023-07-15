import React, { useState } from 'react';
import { TextInput, View, FlatList, Text } from 'react-native';
import { styles } from './styles';

const ModalTextInput = () => {
  const [treatment, setTreatment] = useState('Massage');
  const [data, setData] = useState([]);

  const dataList = [
    { name: 'Nails' },
    { name: 'Massage' },
    { name: 'Hair' },
    { name: 'Hair Removal' },
    { name: 'Face' },
    { name: 'Body' },
    { name: 'For Men' },
  ];

  const searchList = (text) => {
    const inputValue = text.toUpperCase();

    if (inputValue.trim() !== '') {
      const newData = dataList.filter((d) => {
        const itemData = d.name.toUpperCase();
        return itemData.indexOf(inputValue) > -1;
      });

      setData(newData);
    } else {
      setData([]);
    }

    setTreatment(text);
  };

  const renderSeparator = () => (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
      }}
    />
  );

  const renderInput = () => (
    <>
        <TextInput
        style={[styles.input, styles.modalInput]}
        placeholder="Search For Treatments"
        placeholderTextColor="rgb(185, 185, 185)"
        keyboardType="default"
        value={treatment}
        onChangeText={(text) => searchList(text)}
        autoFocus
        />
        <View style={{
          padding: 16
        }}>
            <Text style={styles.modalHeader}>Recent Search</Text>
            <Text>{treatment}</Text>
            <Text style={styles.modalHeader}>Popular Search</Text>
        </View>
    </>

  );

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={{ padding: 10 }}>{item.name}</Text>}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderInput}
      />
    </View>
  );
};

export default ModalTextInput;
