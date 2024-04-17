import React from 'react';
import {SafeAreaView} from 'react-native';
import Login from './src/screens/login/Login';

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <Login />
    </SafeAreaView>
  );
};

export default App;
