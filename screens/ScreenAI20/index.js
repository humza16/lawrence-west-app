import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';

const ViewMoments = () => {
  const greetingCard = {
    images: ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3'],
    videos: ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3'],
    audio: ['https://tinyurl.com/42evm3m3'],
    qrCode: 'https://tinyurl.com/42evm3m3'
  };
  return <SafeAreaView style={_styles.ZwGOaYbz}>
      <ScrollView style={_styles.CXNKWFps}>
        <Text style={_styles.YHDDxigf}>Your Greeting Card</Text>
        {greetingCard.images.map((image, index) => <Image key={index} source={{
        uri: image
      }} style={_styles.nOTevpiG} />)}
        {greetingCard.videos.map((video, index) => <View key={index} style={_styles.KpsiCVRG} />)}
        {greetingCard.audio.map((audio, index) => <View key={index} style={_styles.tteuMLqA} />)}
        <Text style={_styles.MAEMgwsU}>Your QR Code:</Text>
        <Image source={{
        uri: greetingCard.qrCode
      }} style={_styles.iMmxqWyK} />
      </ScrollView>
    </SafeAreaView>;
};

export default ViewMoments;

const _styles = StyleSheet.create({
  ZwGOaYbz: {
    flex: 1,
    backgroundColor: "#fff"
  },
  CXNKWFps: {
    padding: 20
  },
  YHDDxigf: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  nOTevpiG: {
    width: "100%",
    height: 200,
    marginBottom: 20
  },
  KpsiCVRG: {
    width: "100%",
    height: 200,
    backgroundColor: "#000",
    marginBottom: 20
  },
  tteuMLqA: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    marginBottom: 20
  },
  MAEMgwsU: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  iMmxqWyK: {
    width: 200,
    height: 200
  }
});