import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button } from 'react-native';

const PayPerGreetingCardScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.cardTitle}>Your Greeting Card</Text>
        <Text style={styles.cardDescription}>
          Pay for your custom greeting card and share it with your loved ones.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Pay with Card" onPress={() => {}} />
          <Button title="Pay with PayPal" onPress={() => {}} />
          <Button title="Pay with Google Pay" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 10
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  cardDescription: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%'
  }
});
export default PayPerGreetingCardScreen;