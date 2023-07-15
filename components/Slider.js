import React from 'react';
import { View, Image, StatusBar, Dimensions , Text } from 'react-native';
import Swiper from 'react-native-swiper-flatlist';

const { width, height } = Dimensions.get('window');

const styles = {
  slide: {
    flex: 1,
    width: "100vw",
    backgroundColor: 'transparent',
    textAlign: "center",
    margin: "0 auto",
  },
  container: {
    flex: 1,
    width: "100%",
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    margin: "auto",
    marginTop: 16,
    marginBottom: 16,
    width: 70,
    height: 70,
  },

  text: {
    textAlign: "center",
    paddingTop: "1rem",
    paddingBottom: "1.25rem",
    fontWeight: "bold" ,
    color: "rgb(80 , 80 , 80)"
  }
};

const Slider = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The brighter way to book beauty</Text>
      <StatusBar barStyle="light-content" />
      <Swiper
        style={styles.wrapper}
        showPagination
        paginationActiveColor={'#ff5c39'}
        paginationDefaultColor={'#e2e2e2'}
        paginationStyle={{
          bottom: -45,
        }}
        paginationStyleItem={{
          background: '#e2e2e2',
          borderRadius: '50%',
          height: '8px',
          marginRight: '15px',
          transition: '.25s',
          width: '8px',
        }}
        paginationStyleItemActive={{
            width: '12px',
            height: '12px'
        }}
        loop={false}
      >
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/smart.svg')}
            resizeMode="cover"
          />
          <View style={{textAlign: "center"}}>
            <Text style={{fontWeight: "bold", color: 'rgb(80 , 80 , 80)' , fontSize: "1.05rem"}}>Smart prices</Text>
            <Text style={{width: '45%' , margin: "auto" , marginTop:'.75rem'}}>Just book last-minute , or off-peak</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/24.svg')}
            resizeMode="cover"
          />
          <View style={{textAlign: "center"}}>
            <Text style={{fontWeight: "bold", color: 'rgb(80 , 80 , 80)' , fontSize: "1.05rem"}}>Book 24/7</Text>
            <Text style={{width: '45%' , margin: "auto" , marginTop:'.75rem'}}>From bed, or the bus</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/choice.svg')} 
            resizeMode="cover"
           />
           <View style={{textAlign: "center"}}>
            <Text style={{fontWeight: "bold", color: 'rgb(80 , 80 , 80)' , fontSize: "1.05rem"}}>Choice of top-rated salons</Text>
            <Text style={{width: '45%' , margin: "auto" , marginTop:'.75rem'}}>Thousands of venues (and reviews)</Text>
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default Slider;
