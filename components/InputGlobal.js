import React from 'react'
import {  Pressable  , View , Text } from 'react-native';
import { styles } from "../components/styles"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';

const InputGlobal = ({ ModalHandeler , placeholder , inputText , icon , resetHandeler}) => {

  const onPress = (text) => {
    if(inputText.city === text) {
      resetHandeler('city')
    } else if (inputText.traitment === text) {
      resetHandeler('traitment')
    } else {
      resetHandeler('date')
    }
  }

  return (
    <View style={{marginTop: "1rem" , padding:".5rem" , borderWidth: 1 , borderRadius: 4 , borderColor: "rgb(183, 183, 183)" , backgroundColor: "#fff"}}>
        <Pressable onPress={() => ModalHandeler(placeholder)}>
          <View style={styles.input} keyboardType="default"> 
            {icon === "SearchIcon" ? <SearchIcon /> : icon === "LocationOnIcon" ? <LocationOnIcon /> : <CalendarMonthIcon />}
            <Text style={{marginLeft: 6 , marginRight: "auto", color: 'grey', opacity: 1}}>
              {placeholder !== "Desired City" &&  placeholder !== "Date" &&  (placeholder === "Search For Treatments"  && inputText.traitment !== "" ? inputText.traitment : placeholder)}
              {placeholder !== "Search For Treatments" && placeholder !== "Date" &&  (placeholder === "Desired City" && inputText.city !== "" ? inputText.city : placeholder)}
              {placeholder !== "Search For Treatments" && placeholder !== "Desired City" && (placeholder === "Date" && inputText.date !== "" ? inputText.date : placeholder)}
            </Text>
            <Text>
            {placeholder !== "Desired City" &&  placeholder !== "Date" &&  (placeholder === "Search For Treatments"  && inputText.traitment !== "" ? <Text> <Pressable onPress={() => onPress(inputText.traitment)}><CloseIcon /></Pressable> </Text> : <Text></Text> )}

            {placeholder !== "Search For Treatments" &&  placeholder !== "Date" &&  (placeholder === "Desired City"  && inputText.city !== "" ? <Text> <Pressable onPress={() => onPress(inputText.city)}> <CloseIcon /> </Pressable> </Text> : <Text></Text> )}

            {placeholder !== "Search For Treatments" &&  placeholder !== "Desired City" &&  (placeholder === "Date"  && inputText.date !== "" ? <Text> <Pressable onPress={() => onPress(inputText.date)}> <CloseIcon /> </Pressable> </Text> : <Text></Text> )}
                
              </Text>
          </View>
         </Pressable>
    </View>
  )
}

export default InputGlobal