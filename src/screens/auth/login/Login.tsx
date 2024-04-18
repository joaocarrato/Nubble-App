import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/Button';
import { InputText } from '../../../components/Input/InputText';
import { StackTypes } from '../../../types/navigation';
import { emailRegex } from '../../../utils/regex';

interface FormProps {
  email?: string;
  password?: string;
}

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const navigation = useNavigation<StackTypes>();

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  const onSubmit: SubmitHandler<FormProps> = data => {
    //TODO
    console.log(data);
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
        <Controller
          control={control}
          name="email"
          rules={{ required: true, pattern: emailRegex }}
          render={({ field: { onChange } }) => (
            <InputText
              mb4
              label="E-mail"
              placeholder="Digite seu e-mail"
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={onChange}
              error={errors.email}
              errorMessage="Digite um e-mail válido"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: true, minLength: 8 }}
          render={({ field: { onChange } }) => (
            <InputText
              label="Senha"
              placeholder="Digite sua senha"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={onChange}
              error={errors.password}
              errorMessage="Digite uma senha válida"
            />
          )}
        />
      </View>

      <TouchableOpacity className="mb-12">
        <Text className="text-secondaryDefault text-sm font-satoshiRegular font-bold">
          Esqueci minha senha
        </Text>
      </TouchableOpacity>

      <Button
        isOutline={false}
        label="Entrar"
        onPress={handleSubmit(onSubmit)}
      />

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
