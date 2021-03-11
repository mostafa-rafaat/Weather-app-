import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
      <Stack.Navigator headerMode='none' initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}
export default  MainStackNavigator