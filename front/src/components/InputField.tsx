import {StyleSheet, View, Dimensions, TextInputProps, Text} from 'react-native';
import {color} from '../consts/colors';
import {Pressable, TextInput} from 'react-native-gesture-handler';
import {ForwardedRef, forwardRef, useRef} from 'react';
import {mergeRefs} from '../utils/common';

interface InputFieldProps extends TextInputProps {
  placeHolder?: string;
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

const InputField = forwardRef(
  (
    {
      placeHolder,
      disabled = false,
      error = '',
      touched = false,
      ...props
    }: InputFieldProps,
    ref?: ForwardedRef<TextInput>,
  ) => {
    const innerRef = useRef<TextInput | null>(null);

    const handlePressInput = () => {
      innerRef.current?.focus();
    };

    return (
      <Pressable onPress={handlePressInput}>
        <View
          style={[
            styles.container,
            disabled && styles.disabled,
            touched && Boolean(error) && styles.inputError,
          ]}>
          <TextInput
            ref={ref ? mergeRefs(innerRef, ref) : innerRef}
            editable={!disabled}
            placeholder={placeHolder}
            placeholderTextColor={color.GRAY_500}
            autoCapitalize="none"
            spellCheck={false}
            autoCorrect={false}
            style={[styles.input, disabled && styles.disabled]}
            {...props}
          />
          {touched && Boolean(error) && (
            <Text style={styles.error}>{error}</Text>
          )}
        </View>
      </Pressable>
    );
  },
);

const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: color.GRAY_200,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  input: {
    fontSize: 16,
    color: color.BLACK,
    padding: 0,
  },
  inputError: {
    borderWidth: 1,
    borderColor: color.RED_300,
  },
  disabled: {
    backgroundColor: color.GRAY_200,
    color: color.GRAY_700,
  },
  error: {
    color: color.RED_500,
    paddingTop: 6,
    fontSize: 12,
  },
});

export default InputField;
