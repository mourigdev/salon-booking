import React , { useState } from 'react'
import { SafeAreaView , ScrollView ,  Text, View ,  Button } from 'react-native';
import { styles } from "../components/styles"
// Components
import Header from '../components/Header';
import Logo from '../components/Logo';
import ModalView from "../components/ModalView";
import InputGlobal from '../components/InputGlobal';
import Slider from '../components/Slider';



const Home = () => {



  const dataList = [
    { id:1, name: 'Nails' },
    { id:2, name: 'Massage' },
    { id:3, name: 'Hair' },
    { id:4, name: 'Hair Removal' },
    { id:5, name: 'Face' },
    { id:6, name: 'Body' },
    { id:7, name: 'For Men' },
  ];

  const dataList2 = [
    { id:1, name: 'Tangier' },
    { id:2, name: 'Tetouan' },
    { id:3, name: 'Casablanca' },
    { id:4, name: 'Rabat' },
    { id:5, name: 'Marakkech' },
    { id:6, name: 'Agadir' },
    { id:7, name: 'Khenifra' },
  ];

  const dataList3 = [
    { id:1, name: 'Nails' },
    { id:2, name: 'Massage' },
    { id:3, name: 'Hair' },
    { id:4, name: 'Hair Removal' },
    { id:5, name: 'Face' },
    { id:6, name: 'Body' },
    { id:7, name: 'For Men' },
  ];


  const recentData =     [
    { id:1, name: 'Nails' },
    { id:2, name: 'Massage' },
    { id:3, name: 'Hair' },
  ]




  const [modalData, setModalData] = useState([]);
  const [modalVisible, setModalVisible] = useState({visible: false, type: ''});
  const [inputText , setInputText] = useState({
    city : '',
    traitment : '',
    date: ''
  })


  const onFormSubmit = () => {

  }

  const ModalHandeler = (condition) =>{
    switch (condition) {
      case 'Search For Treatments':
        setModalData(dataList)
        break;
      case 'Desired City':
        setModalData(dataList2)
        break;
      case 'Date':
        setModalData(dataList3)
        break;
      default: 
        setModalData()
        break;
    }
    setModalVisible({visible: !modalVisible.visible, type: condition})
  }

  const getTreatment = (treatment , placeholder ) => {
    if(placeholder === "Search For Treatments") {
      setInputText({
        ...inputText,
        traitment: treatment
      })
    } else if (placeholder === "Desired City") {
      setInputText({
        ...inputText,
        city: treatment
      })
    } else {
      setInputText({
        ...inputText,
        date: treatment
      })
    }
  }


  const resetHandeler = (type) =>{
    switch (type) {
      case 'traitment':
        setInputText({...inputText, traitment : ''})
        break;
      case 'city':
        setInputText({...inputText, city : ''})
        break;
      case 'date':
        setInputText({...inputText, date : ''})
        break;
    
      default:
        break;
    }
  }


  return (
    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>
          <Logo />
          <View style={{padding: "1rem"  , backgroundColor: "#FF6668"}}>
            <Text style={{color: "white" , fontWeight: "bold"}}>Behind every</Text>
            <Text style={{paddingLeft:"1rem" , color: "white" , fontWeight: "bold"}}>appointment</Text>
            <View style={{backgroundColor:"#fff" , marginTop:"1rem" , padding:"1rem"}}>
              <InputGlobal icon={"SearchIcon"} resetHandeler={resetHandeler} inputText={inputText} placeholder={'Search For Treatments'} ModalHandeler={ModalHandeler} />
              <InputGlobal icon={"LocationOnIcon"} resetHandeler={resetHandeler} inputText={inputText} placeholder={'Desired City'} ModalHandeler={ModalHandeler}/>
              <InputGlobal icon={"CalendarMonthIcon"} resetHandeler={resetHandeler} inputText={inputText} placeholder={'Date'} ModalHandeler={ModalHandeler}/>
              <View style={styles.btn}>
                <Button  title="Search Treatment"  color="#ff5c39" onPress={onFormSubmit} />
              </View>
            </View>
          </View>
          <Slider />
          <Header />
          {/* ==========modal=========== */}
          <ModalView getTreatment={getTreatment} dataList={modalData} recentData={recentData} recentExist={modalVisible.type}  modalVisible={modalVisible.visible} ModalHandeler={ModalHandeler}/>
       </ScrollView>
    </SafeAreaView>
  )
}

export default Home