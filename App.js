import React from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './src/pages/Splash';
import Onboarding from './src/pages/Onboarding';
import Auth from './src/pages/Auth';
import Home from './src/pages/Home';
import Description from './src/pages/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen
            name="Description"
            component={Description}
            options={{headerShown: true}}
          />
          <Stack.Screen name="Onboarding" component={Onboarding} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
