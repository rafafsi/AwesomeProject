import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type propNavigationStack = {
  Home: undefined;
  Profile?: {
    name: string;
  };
  Search: undefined;
};

export type propsStack = NativeStackNavigationProp<propNavigationStack>;
