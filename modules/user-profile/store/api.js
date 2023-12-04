import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, Text, Image, Button, Share } from 'react-native';

const ShareGreetingCardScreen = () => {
  const qrCodeUrl = 'https://tinyurl.com/42evm3m3';

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Scan this QR code to view my greeting card! ${qrCodeUrl}`,
        url: qrCodeUrl,
        title: 'Share Greeting Card QR Code'
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type of ' + result.activityType);
        } else {
          console.log('Shared!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return <SafeAreaView style={_styles.UVzmHbVF}>
      <Text style={_styles.NXUvBxIy}>Share Greeting Card QR Code</Text>
      <Image style={_styles.RibEaUbg} source={{
      uri: qrCodeUrl
    }} />
      <Button title="Share QR Code" onPress={onShare} />
    </SafeAreaView>;
};

export default ShareGreetingCardScreen;

const _styles = StyleSheet.create({
  UVzmHbVF: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  NXUvBxIy: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  RibEaUbg: {
    width: 200,
    height: 200,
    marginBottom: 20
  }
});