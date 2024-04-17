import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login = () => {
  return (
    <ScrollView className="flex-1 pt-10 px-6 bg-black" scrollEnabled={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
        <Text className="font-satoshiRegular font-black text-white text-3xl">
          Olá
        </Text>
        <Text className="font-satoshiRegular text-[18px] font-medium text-white">
          Digite seu e-mail e senha para entrar
        </Text>

        <View className="mt-10 mb-2">
          <Input label="E-mail" placeholder="Digite seu e-mail" />

          <View className="mt-4" />

          <Input label="Senha" placeholder="Digite sua senha" isObscure />
        </View>

        <TouchableOpacity className="mb-12">
          <Text className="text-secondaryDefault text-sm font-satoshiRegular font-bold">
            Esqueci minha senha
          </Text>
        </TouchableOpacity>

        <Button isOutline={false} label="Entrar" />

        <View className="mb-3" />
        <Button isOutline label="Criar minha conta" />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;
