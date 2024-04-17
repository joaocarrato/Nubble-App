import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

type Props = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isOutline: boolean;
  label: string;
};

const Button = ({ label, onPress, isOutline }: Props) => {
  return isOutline === false ? (
    <TouchableOpacity
      onPress={onPress}
      className="w-full h-[50px] rounded-xl bg-secondaryDefault items-center justify-center">
      <Text className="text-base text-white font-satoshiRegular font-bold">
        {label}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      className="w-full h-[50px] rounded-xl bg-black border-2 border-secondaryDefault items-center justify-center">
      <Text className="text-base text-secondaryDefault font-satoshiRegular font-bold">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
