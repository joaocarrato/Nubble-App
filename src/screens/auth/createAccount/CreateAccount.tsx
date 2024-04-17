import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { colors } from '../../../theme/colors';

const CreateAccount = () => {
  return (
    <ScrollView className="flex-1 px-6 pt-6 bg-black">
      <TouchableOpacity className="flex-row gap-x-[7px] items-center pb-6">
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
        <Input label="Seu username" placeholder="@" mb4 />
        <Input
          label="Nome completo"
          placeholder="Digite seu nome completo"
          mb4
        />
        <Input label="E-mail" placeholder="Digite seu email" mb4 />
        <Input label="Senha" placeholder="Digite sua senha" isObscure />
      </View>

      <Button isOutline={false} label="Criar minha conta" />
    </ScrollView>
  );
};

export default CreateAccount;
