import React from 'react';
import { SafeAreaView } from 'react-native';
import CreateAccount from './src/screens/auth/createAccount/CreateAccount';

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <CreateAccount />
    </SafeAreaView>
  );
};

export default App;
