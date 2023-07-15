import {StyleSheet ,  StatusBar} from 'react-native'

export const styleModal = StyleSheet.create({

    modalInput: {
      paddingBottom: '12px',
      paddingLeft: 16,
      fontWeight: "bold",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;',
      borderBottomWidth: 0.2,
      borderBottomColor: 'rgba(0, 0, 0, 0.09)',
      letterSpacing: 1.25
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
      textAlign: 'center',
      fontSize: '17px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;'
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalHeader: {
      fontWeight: "bold",
      letterSpacing: 1.25,
      marginTop: '12px',
      marginBottom: '12px',
    },
    TextInputParent:{
      width:'100%',
    }
  })