import Auth from '../pages/Auth';
import Onboarding from '../pages/Onboarding';
import Splash from '../pages/Splash';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};
