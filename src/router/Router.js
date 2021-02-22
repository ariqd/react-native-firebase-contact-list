import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import AddContact from '../pages/AddContact';
import DetailContact from '../pages/DetailContact';
import EditContact from '../pages/EditContact';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Add Contact" component={AddContact} />
      <Stack.Screen name="Edit Contact" component={EditContact} />
      <Stack.Screen name="Contact Details" component={DetailContact} />
    </Stack.Navigator>
  );
};

export default Router;
