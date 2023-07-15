import { View , Image ,Text, TouchableOpacity } from 'react-native'
import {styles} from "./styles"
import { useNavigation } from '@react-navigation/native';


const Logo = () => {
    const navigation = useNavigation();
    
    const onPress = () => {
        navigation.navigate("login")
    }

  return (
    <View style={{flexDirection: "row" , alignItems: 'center' , justifyContent: "space-between" , padding: "1rem"}}>
        <Image
            style={styles.tinyLogo}
            source={require('../assets/favicon.png')}
        />
        <TouchableOpacity style={{ fontWeight: "bold" , fontFamily: "Arial" , fontSize: "14px" }} onPress={onPress}>
            <Text style={{color: "#ff5c39"}}>LOG IN</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Logo