import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Splash from './src/pages/Splash';
import Onboarding from './src/pages/Onboarding';
import Auth from './src/pages/Auth';
import Home from './src/pages/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
