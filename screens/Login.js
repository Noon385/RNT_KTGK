import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/firebaseconfig';
import { Image } from 'react-native';


const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => alert("Login successfully ")).catch((e) => console.log(e));
  }

  return (
    <View style={styles.container}>
      
     <Image style={styles.image} source={'../assets/logo.png'}></Image>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="default"
        placeholder='Email'
        required
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        required
      />
      <Text onPress={handleLogin} style={styles.button}>Login</Text>
      <View>
      <Text>Don't have an account ?
      <Text  style={styles.Text}>Sign Up</Text></Text>
      </View>
    </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    width: 200,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'aqua',
    color: '#fff',
    padding: 12,
    borderRadius: 4,
    width: 200,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', 
    paddingBottom:'50'// Optional: adjusts the image position to maintain aspect ratio
  }, title: {
    
    marginBottom: 20,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -12 }], // Adjust this value to center the text vertically
  },
  Text:{
    fontSize: '10',
    color:"blue",
  }
});

export default LoginForm;