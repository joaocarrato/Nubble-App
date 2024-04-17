import React from 'react';
import { SafeAreaView } from 'react-native';
import CreateAccountSuccess from './src/screens/auth/createAccount/CreateAccountSuccess';

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <CreateAccountSuccess />
    </SafeAreaView>
  );
};

export default App;
