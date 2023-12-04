import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const OrderPrintScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Order Physical Print of QR Code</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.qrCode} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.description}>
          Order a physical print of the QR code linked to your virtual greeting card. This can be used as a tangible gift or keepsake. The QR code, when scanned, will lead to the virtual greeting card created by you.
        </Text>
        <Button title="Order Now" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20,
    backgroundColor: '#6200EE'
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF'
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20
  }
});
export default OrderPrintScreen;