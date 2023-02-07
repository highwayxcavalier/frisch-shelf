import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Home: undefined;
  Recipes: undefined;
  Expired: undefined;
  User: undefined;
  AddItemScreen: undefined;
  SingleRecipeScreen: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | { title: string };
  AddItem: undefined;
  SingleRecipe: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
