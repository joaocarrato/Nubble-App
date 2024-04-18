import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button';
import InputText from '../../../components/Input/InputText';
import { colors } from '../../../theme/colors';
import { StackTypes } from '../../../types/navigation';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<StackTypes>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSuccessCreate = () => {
    navigation.navigate('CreateAccountSuccess');
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
        <InputText
          mb4
          label="Seu username"
          placeholder="@"
          autoCapitalize="none"
        />

        <InputText
          mb4
          label="Nome Completo"
          placeholder="Digite seu nome completo"
        />

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
          autoCapitalize="none"
          secureTextEntry
        />
      </View>

      <Button
        isOutline={false}
        label="Criar minha conta"
        onPress={handleSuccessCreate}
      />
    </ScrollView>
  );
};

export default CreateAccount;
