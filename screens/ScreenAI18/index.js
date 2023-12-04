import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const SaveDraftScreen = () => {
  const [draftSaved, setDraftSaved] = useState(false);

  const handleSaveDraft = () => {
    setDraftSaved(true);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create a Virtual Greeting Card</Text>
      </View>
      <View style={styles.cardPreview}>
        <Image style={styles.cardImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save Draft" onPress={handleSaveDraft} />
      </View>
      {draftSaved && <View style={styles.saveConfirmation}>
          <Text style={styles.confirmationText}>Draft Saved!</Text>
        </View>}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  cardPreview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  buttonContainer: {
    padding: 20
  },
  saveConfirmation: {
    padding: 20,
    backgroundColor: '#4CAF50'
  },
  confirmationText: {
    color: '#FFFFFF',
    textAlign: 'center'
  }
});
export default SaveDraftScreen;