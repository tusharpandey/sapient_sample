import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryContainer from './presentation/Gallery/GalleryContainer'
import GalleryDetailContainer from './presentation/GalleryDetail/GalleryDetailContainer'
const Stack = createStackNavigator();

const AppNavigator = (props) => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="gallery">
        <Stack.Screen name="gallery" component={GalleryContainer} options={{ headerShown: false }} />
        <Stack.Screen name="galleryDetail" component={GalleryDetailContainer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
