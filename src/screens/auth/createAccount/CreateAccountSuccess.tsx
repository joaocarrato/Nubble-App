import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../../components/Button';
import CheckRound from '../../../components/svg/CheckRound';
import { StackTypes } from '../../../types/navigation';

const CreateAccountSuccess = () => {
  const navigation = useNavigation<StackTypes>();

  const handleNavigation = () => {
    navigation.pop(2);
  };

  return (
    <View className="flex-1 bg-black pt-[40px] px-6">
      <CheckRound />

      <Text className="text-white font-satoshiRegular text-[32px] font-black pt-6 pb-4">
        Sua conta foi criada com sucesso!
      </Text>

      <Text className="text-white font-satoshiRegular text-lg font-medium pb-10">
        Agora é só fazer login na nossa plataforma.
      </Text>

      <Button
        isOutline={false}
        label="Voltar ao início"
        onPress={handleNavigation}
      />
    </View>
  );
};

export default CreateAccountSuccess;
