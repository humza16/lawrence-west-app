import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const CreateGreetingCardScreen = () => {
  const [cardTitle, setCardTitle] = useState('');
  const [cardMessage, setCardMessage] = useState('');

  const handleSaveDraft = () => {// Save draft logic here
  };

  const handleFinalize = () => {// Finalize and generate QR code logic here
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create a Virtual Greeting Card</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setCardTitle} value={cardTitle} placeholder="Enter card title" />
      <TextInput style={styles.input} onChangeText={setCardMessage} value={cardMessage} placeholder="Enter card message" multiline />
      <View style={styles.buttonContainer}>
        <Button title="Save Draft" onPress={handleSaveDraft} />
        <Button title="Finalize" onPress={handleFinalize} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default CreateGreetingCardScreen;