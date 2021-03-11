import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigator/MainStackNavigator';
import { Provider } from 'react-redux';
import store from './src/Store/configureStore';


 const App = () =>{
  return (
    <Provider store={store}>
    <NavigationContainer style={styles.container}>
    <SafeAreaView style={{flex:1}}>
      <MainStackNavigator/>
      </SafeAreaView>
    </NavigationContainer>
    </Provider>
);
};



export default App;


const styles = StyleSheet.create({

  container :{
    flex:1
  }

}

);
