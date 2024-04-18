import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors } from '../theme/colors';

type Props = {
  label: string;
  placeholder?: string;
  isObscure?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string | undefined;
  mb4?: boolean;
};

const Input = ({
  label,
  placeholder,
  isObscure,
  onChangeText,
  value,
  mb4,
}: Props) => {
  return (
    <>
      <Text className="font-satoshiRegular text-base font-medium text-white mb-1">
        {label}
      </Text>

      <View className={`${mb4 ? 'mb-4' : ''}`}>
        <TextInput
          className={`w-full h-[56px] bg-white border-[1px] border-graysFour rounded-xl px-4 text-[16px] font-satoshiRegular`}
          placeholderTextColor={colors.graysTwo}
          placeholder={placeholder}
          autoCapitalize="none"
          secureTextEntry={isObscure}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </>
  );
};

export default Input;
