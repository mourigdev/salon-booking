import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './components/Search';
import Home from './components/Home';
import Book from './components/Book';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Search" component={Search} options={{headerShown:false}} />
        <Stack.Screen name="Book" component={Book} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




export default App;