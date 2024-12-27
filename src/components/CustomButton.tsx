import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  PressableProps,
  Dimensions,
} from 'react-native';
import {color} from '../consts/colors';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'medium';
  inValid?: boolean;
}

// in android
// screen : 상태표시줄 포함
// window : 상태표시줄 미포함
const deviceHeight = Dimensions.get('screen').height;

function CustomButton({
  label,
  variant = 'filled',
  size = 'large',
  inValid = false,
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      disabled={inValid}
      style={({pressed}) => [
        styles.container,
        styles[size],
        pressed ? styles[`${variant}Pressed`] : styles[variant],
        inValid && styles.inValid,
      ]}
      {...props}>
      <Text style={(styles[`${variant}Text`], styles.text)}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    justifyContent: 'center',
  },
  filled: {
    backgroundColor: color.PINK_700,
  },
  outlined: {
    borderColor: color.PINK_700,
    borderWidth: 1,
  },
  large: {
    width: '100%',
    paddingVertical: deviceHeight > 700 ? 15 : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inValid: {
    opacity: 0.5,
  },
  medium: {
    width: '100%',
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  filledText: {
    color: color.WHITE,
  },
  outlinedText: {
    color: color.PINK_700,
  },
  filledPressed: {
    backgroundColor: color.PINK_500,
  },
  outlinedPressed: {
    backgroundColor: color.PINK_700,
    borderWidth: 1,
    opacity: 0.5,
  },
});

export default CustomButton;
