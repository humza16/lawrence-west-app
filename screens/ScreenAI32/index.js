import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native';

const SelectPrintingVendorScreen = () => {
  const [vendors, setVendors] = useState([{
    id: '1',
    name: 'Vendor 1',
    url: 'https://vendor1.com'
  }, {
    id: '2',
    name: 'Vendor 2',
    url: 'https://vendor2.com'
  }, {
    id: '3',
    name: 'Vendor 3',
    url: 'https://vendor3.com'
  }]);

  const handleVendorSelection = url => {
    Linking.openURL(url);
  };

  return <SafeAreaView style={_styles.tWkOYPRi}>
      <View style={_styles.uMkQCwuo}>
        <Text style={_styles.KYoXEUaQ}>Select Printing Vendor</Text>
      </View>
      <FlatList data={vendors} keyExtractor={item => item.id} renderItem={({
      item
    }) => <TouchableOpacity style={_styles.VBXRFbqE} onPress={() => handleVendorSelection(item.url)}>
            <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.CaarcsLa} />
            <Text style={_styles.GellZjas}>{item.name}</Text>
          </TouchableOpacity>} />
    </SafeAreaView>;
};

export default SelectPrintingVendorScreen;

const _styles = StyleSheet.create({
  tWkOYPRi: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  uMkQCwuo: {
    padding: 20
  },
  KYoXEUaQ: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },
  VBXRFbqE: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    margin: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  CaarcsLa: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20
  },
  GellZjas: {
    fontSize: 18,
    color: "#333"
  }
});