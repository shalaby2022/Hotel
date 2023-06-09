import Auth from '../pages/Auth';
import Description from '../pages/Details';
import Home from '../pages/Home';
import Onboarding from '../pages/Onboarding';
import Splash from '../pages/Splash';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Description"
        component={Description}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
