import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {
  AuthenticatedUserContext,
  AuthenticatedUserProvider,
} from './src/Context/AuthContext';
import {AuthStack} from './src/Navigations/AuthStack ';
import {MainStack} from './src/Navigations/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {RootSiblingParent} from 'react-native-root-siblings';

const RootNavigator = () => {
  const {user} = useContext(AuthenticatedUserContext);

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthenticatedUserProvider>
        <RootSiblingParent>
          <RootNavigator />
        </RootSiblingParent>
      </AuthenticatedUserProvider>
    </SafeAreaView>
  );
};
