import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

const ProfileCustomization = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Button title="Upload Profile Picture" onPress={() => {}} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bio</Text>
        <TextInput style={styles.input} value={bio} onChangeText={setBio} multiline />
      </View>
      <Button title="Save Changes" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  }
});
export default ProfileCustomization;