import {StyleSheet ,  StatusBar} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 10,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    input: {
      height: '100%',
      width: '100%',
      flex: '1 0 auto',
      padding: 0,
      color: '#4d4d4d',
      fontSize: 16,
      lineHeight: 24,
      borderBottomWidth: 0.2,
      borderBottomColor: 'rgba(0, 0, 0, 0.09)',
      outlineStyle: 'none',
      
      
    },
    
    
    
    centeredView: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      height: '100%'
      
    },
    modalback:{
      backgroundColor: '#fff'
    },
    // modalView: {
    //   margin: 20,
    //   backgroundColor: 'white',
    //   borderRadius: 20,
    //   padding: 35,
    //   alignItems: 'center',
    //   shadowColor: '#000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 4,
    //   elevation: 5,
    // },
    closeParrent:{
      width: '100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-end',
      padding:'1rem'
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: '#001e62',
      // fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '17px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;'
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    TextInputParent:{
      width:'100%'
    }
  })