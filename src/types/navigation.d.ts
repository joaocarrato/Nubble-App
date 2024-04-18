import { StackNavigationProp } from '@react-navigation/stack';

type StackParams = {
  Login: undefined;
  CreateAccount: undefined;
  CreateAccountSuccess: undefined;
};

export type StackTypes = StackNavigationProp<StackParams>;
