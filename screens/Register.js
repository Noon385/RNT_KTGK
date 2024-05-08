import React, { useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image  } from 'react-native';
import {auth} from '../database/firebaseconfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!fullName) {
        setError('Full name cannot be empty.');
        return;
      }
    if (!email.includes('@')) {
        setError('Email must contain "@" symbol.');
        return;
      }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      const user = userCredential.user;
      await user.updateProfile({ displayName: fullName });
      console.log('User registered:', user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={'../assets/logo.png'}></Image>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        placeholder="Enter your full name"
      />

      
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        placeholder="Enter your password again"
        secureTextEntry={true}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <Text onPress={handleSubmit} style={styles.button}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems:'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', 
    paddingBottom:'50'// Optional: adjusts the image position to maintain aspect ratio
  },button: {
    backgroundColor: 'aqua',
    color: '#fff',
    padding: 12,
    borderRadius: 4,
    width: 200,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 16,
  },
});

export default RegisterForm;