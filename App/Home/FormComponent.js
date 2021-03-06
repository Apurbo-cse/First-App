/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FormItem} from 'react-native-form-component';

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={email => setEmail(email)}
      />
      <TextInput style={styles.TextInput}
        secureTextEntry={true}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        onChangeText={password => setEmail(password)}
      />
      <TouchableOpacity style={styles.forgot_button}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormComponent;

const styles = StyleSheet.create({
  container: {
      marginTop:150,
      alignItems: 'center',
      justifyContent: 'center',
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 250,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  forgot_button: {
    margin: 5,
  },
  loginBtn: {
    padding: 10,
    margin: 12,
    width: 250,
    borderRadius: 5,
    color: '#fff',
   
    backgroundColor: 'green',
  },
  loginText:{
    textAlign: 'center',
    color:'#fff',
  }
});
