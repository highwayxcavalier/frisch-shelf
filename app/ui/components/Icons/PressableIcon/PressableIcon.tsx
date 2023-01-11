import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Ionicon } from '../../../../types/Ionicons';

interface Props {
  iconName: Ionicon;
  iconSize?: number;
  color?: string;
  hasBackground?: boolean;
  backgroundColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const PressableIcon = ({
  iconName,
  iconSize,
  color,
  onPress,
  hasBackground = false,
  backgroundColor,
}: Props) => {
  return (
    <View style={hasBackground ? styles(backgroundColor).button : null}>
      <Pressable onPress={onPress}>
        <Ionicons name={iconName} size={iconSize} color={color} />
      </Pressable>
    </View>
  );
};

const styles = (backgroundColor?: string) =>
  StyleSheet.create({
    button: {
      padding: 9,
      borderRadius: 10,
      backgroundColor: backgroundColor,
    },
  });

export default PressableIcon;
