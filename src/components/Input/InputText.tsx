import React from 'react';
import { FieldError } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '../../theme/colors';

interface InputTextProps extends TextInputProps {
  error?: FieldError | undefined;
  mb4?: boolean;
  label?: string;
  errorMessage?: string;
}

export function InputText({
  error,
  mb4,
  label,
  errorMessage,
  ...restProps
}: InputTextProps) {
  return (
    <View className={`${mb4 ? 'mb-4' : ''}`}>
      <Text className="font-satoshiRegular text-base font-medium text-white mb-1">
        {label}
      </Text>

      <TextInput
        className={`w-full h-[56px] bg-white border-[2px] rounded-xl px-4 text-[16px] font-satoshiRegular ${
          error ? 'border-errorDefault' : 'border-graysFour'
        }`}
        {...restProps}
        placeholderTextColor={colors.graysTwo}
      />

      {error && (
        <Text className="text-sm text-errorDefault font-satoshiRegular font-bold pt-1">
          {errorMessage}
        </Text>
      )}
    </View>
  );
}
