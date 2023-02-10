import React from 'react';
import { Pressable, StyleSheet, PressableProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Ionicon } from '../../../../types/Ionicons';

interface Props {
  iconName: Ionicon;
  iconSize?: number;
  color?: string;
  backgroundColor?: string;
}

const PressableIcon = ({
  iconName,
  iconSize,
  color,
  onPress,
  backgroundColor,
}: Props & PressableProps) => {
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
