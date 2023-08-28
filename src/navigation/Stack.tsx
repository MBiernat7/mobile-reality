import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import PostsScreen from '../screens/Posts';
import PostScreen from '../screens/Post';
import AddPostScreen from '../screens/AddPost';

const Stack = createNativeStackNavigator();

const NavigatorStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Add Post" component={AddPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorStack;
