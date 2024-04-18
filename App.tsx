import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import CreateAccount from './src/screens/auth/CreateAccount/CreateAccount';
import CreateAccountSuccess from './src/screens/auth/CreateAccount/CreateAccountSuccess';
import Login from './src/screens/auth/Login/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1 bg-black">
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen
            name="CreateAccountSuccess"
            component={CreateAccountSuccess}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
