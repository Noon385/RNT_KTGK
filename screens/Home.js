import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { addDoc, collection, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../database/firebaseconfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const App = () => {
  const [job, setJob] = useState('');
   const [jobs, setJobs] = useState([]);
   const USERS = collection(db, "USERS")
   const Jobs = collection(db, "Jobs")
  

  const handleAddJob = () => {
    db.collection("Jobs").add({
      detail: job,

    })
      .then((docRef) => {
        console.log("Document written with detail: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const handleLogout = (dispatch) => {
    signOut(auth).then(() => dispatch({ type: "LOGOUT" }))
  }

  const getJob =()=>{
  //   db.collection("Jobs").get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${doc.data()}`);
  //     });
  // });
  }

  return (
    <View>
      {/* nút logout */}
      <TouchableOpacity >
        <Text style={{ color: 'white', fontWeight: 'bold' }} onPress={() => handleLogout()}>Logout</Text>
      </TouchableOpacity>
      {/* cụm thêm job */}
      <TextInput
        value={job}
        onChangeText={(text)=>{setJob(text)}}
        placeholder="Enter job title"
      />
      <Button title="Add Job" onPress={()=>{handleAddJob}} />

      {/* list job */}
      <FlatList
        data={jobs}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default App;