import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button';
import { InputText } from '../../../components/Input/InputText';
import { colors } from '../../../theme/colors';
import { StackTypes } from '../../../types/navigation';
import { emailRegex } from '../../../utils/regex';

interface FormProps {
  username?: string;
  name?: string;
  email?: string;
  password?: string;
}

const CreateAccount = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const navigation = useNavigation<StackTypes>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSuccessCreate = () => {
    navigation.navigate('CreateAccountSuccess');
  };

  const onSubmit: SubmitHandler<FormProps> = data => {
    console.log(data);
    handleSuccessCreate();
  };

  return (
    <ScrollView className="flex-1 px-6 pt-6 bg-black">
      <TouchableOpacity
        className="flex-row gap-x-[7px] items-center pb-6"
        onPress={handleGoBack}>
        <Icon
          name="arrow-back-outline"
          color={colors.secondaryDefault}
          size={24}
        />

        <Text className="text-white font-bold font-satoshiRegular text-base">
          Voltar
        </Text>
      </TouchableOpacity>

      <Text className="text-white font-black font-satoshiRegular text-[32px] pb-[32px]">
        Criar uma conta
      </Text>

      <View className="mb-12">
        <Controller
          control={control}
          name="username"
          rules={{
            required: true,
            validate: value => value?.includes('@'),
          }}
          render={({ field: { onChange } }) => (
            <InputText
              mb4
              label="Seu username"
              placeholder="@"
              autoCapitalize="none"
              onChangeText={onChange}
              error={errors.username}
              errorMessage="Digite um username válido"
            />
          )}
        />

        <Controller
          control={control}
          name="name"
          rules={{ required: true, minLength: 3 }}
          render={({ field: { onChange } }) => (
            <InputText
              mb4
              label="Nome Completo"
              placeholder="Digite seu nome completo"
              onChangeText={onChange}
              error={errors.name}
              errorMessage="Digite um nome válido"
            />
          )}
        />

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
              autoCapitalize="none"
              secureTextEntry
              onChangeText={onChange}
              error={errors.password}
              errorMessage="Digite uma senha válida"
            />
          )}
        />
      </View>

      <Button
        isOutline={false}
        label="Criar minha conta"
        onPress={handleSubmit(onSubmit)}
      />
    </ScrollView>
  );
};

export default CreateAccount;
