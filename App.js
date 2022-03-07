import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Transaction from './screens/transaction';
import Search from './screens/search';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs'; 

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text style={{justifyContent:'center', color:'red',textAlign:'center'}}>E-library App</Text>
     <AppConatiner/>
    </View>
  );
}
}
const Tab= createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})
const AppConatiner = createAppContainer(Tab)

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:50,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});
