import React, { useState } from 'react';
import { TextInput, Pressable , View, FlatList, Text } from 'react-native';
import { styles } from './styles';

const ModalTextInput = ({ dataList , recentData , getTreatment , ModalHandeler , recentExist}) => {


  const [treatment, setTreatment] = useState('');
  const [data, setData] = useState(dataList);
  const [recentSearchs, setRecentSearch] = useState(recentData);


  const searchList = (text) => {
    const inputValue = text.toUpperCase();

    if (inputValue.trim() !== '') {
      const newData = dataList.filter((d) => {
        const itemData = d.name.toUpperCase();
        return itemData.indexOf(inputValue) > -1;
      });

      setData(newData);
    } else {
      setData(dataList);
    }

    setTreatment(text);
  };

  const selectItem = (item) => {
    getTreatment(item , recentExist)
    ModalHandeler()
  }

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
        placeholder={recentExist}
        placeholderTextColor="rgb(185, 185, 185)"
        keyboardType="default"
        value={treatment}
        onChangeText={(text) => searchList(text)}
        autoFocus
        />
       {recentExist === "Search For Treatments" && <View >
            <Text style={styles.modalHeader}>Recent Search</Text>
            <FlatList
              data={recentSearchs}
              renderItem={({ item }) => <Pressable onPress={() => selectItem(item.name)}>
              <Text style={{ padding: 10 }}>{item.name}</Text>
           </Pressable>}
              keyExtractor={(item) => item.name}
              ItemSeparatorComponent={renderSeparator}
          />
        </View>}
        <Text style={styles.modalHeader}>Popular Search</Text>
    </>

  );

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 16
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <Pressable onPress={() => selectItem(item.name)}>
           <Text style={{ padding: 10 }}>{item.name}</Text>
        </Pressable>}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderInput}
      />
    </View>
  );
};

export default ModalTextInput;
