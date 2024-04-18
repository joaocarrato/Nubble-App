import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/Button';
import InputText from '../../../components/Input/InputText';
import { StackTypes } from '../../../types/navigation';

const Login = () => {
  const navigation = useNavigation<StackTypes>();

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <ScrollView className="flex-1 pt-10 px-6 bg-black" scrollEnabled={false}>
      <Text className="font-satoshiRegular font-black text-white text-3xl">
        Olá
      </Text>
      <Text className="font-satoshiRegular text-[18px] font-medium text-white">
        Digite seu e-mail e senha para entrar
      </Text>

      <View className="mt-10 mb-2">
        <InputText
          mb4
          label="E-mail"
          placeholder="Digite seu e-mail"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <InputText
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity className="mb-12">
        <Text className="text-secondaryDefault text-sm font-satoshiRegular font-bold">
          Esqueci minha senha
        </Text>
      </TouchableOpacity>

      <Button isOutline={false} label="Entrar" />

      <View className="mb-3" />
      <Button
        isOutline
        label="Criar minha conta"
        onPress={handleCreateAccount}
      />
    </ScrollView>
  );
};

export default Login;
