import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Ionicon } from '../../../../types/Ionicons';
import { RootStackScreenProps } from '../../../../navigation/types';

interface Props {
  iconName: Ionicon;
  iconSize?: number;
  color?: string;
  backgroundColor?: string;
  onPress?:
    | ((event: GestureResponderEvent) => void)
    | (() => void)
    | (({ navigation }: RootStackScreenProps<'AddItem'>) => void);
}

const PressableIcon = ({
  iconName,
  iconSize,
  color,
  onPress,
  backgroundColor,
}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles(backgroundColor).button}>
      <Ionicons name={iconName} size={iconSize} color={color} />
    </Pressable>
  );
};

const styles = (backgroundColor?: string) =>
  StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      aspectRatio: 1,
      padding: 9,
      borderRadius: 10,
      backgroundColor: backgroundColor || 'transparent',
    },
  });

export default PressableIcon;
