import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import {validateSignup} from '../../utils/validate';
import CustomButton from '../../components/CustomButton';
import {useRef} from 'react';
import {TextInput} from 'react-native-gesture-handler';

function SignUpScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);

  const signUp = useForm({
    initialValue: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    console.log('values', signUp.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          error={signUp.error.email}
          inputMode="email"
          touched={signUp.touched.email}
          {...signUp.getTextInputProps('email')}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          textContentType="oneTimeCode"
          error={signUp.error.password}
          secureTextEntry
          touched={signUp.touched.password}
          {...signUp.getTextInputProps('password')}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          error={signUp.error.passwordConfirm}
          secureTextEntry
          touched={signUp.touched.passwordConfirm}
          onSubmitEditing={handleSubmit}
          {...signUp.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label="로그인" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  inputContainer: {gap: 10, marginBottom: 10},
});

export default SignUpScreen;
