import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, FlatList, Button } from 'react-native';

const MomentsScreen = () => {
  const [selectedMoments, setSelectedMoments] = useState([]);
  const momentsData = [{
    id: '1',
    name: 'Moment 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    name: 'Moment 2',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '3',
    name: 'Moment 3',
    image: 'https://tinyurl.com/42evm3m3'
  } // Add more moments as needed
  ];

  const selectMoment = id => {
    setSelectedMoments([...selectedMoments, id]);
  };

  const deselectMoment = id => {
    setSelectedMoments(selectedMoments.filter(momentId => momentId !== id));
  };

  const renderItem = ({
    item
  }) => <TouchableOpacity onPress={() => selectedMoments.includes(item.id) ? deselectMoment(item.id) : selectMoment(item.id)} style={{
    padding: 10,
    backgroundColor: selectedMoments.includes(item.id) ? '#ddd' : '#fff'
  }}>
      <Image source={{
      uri: item.image
    }} style={_styles.xTQFHaaE} />
      <Text>{item.name}</Text>
    </TouchableOpacity>;

  return <SafeAreaView style={_styles.hjitctWl}>
      <FlatList data={momentsData} renderItem={renderItem} keyExtractor={item => item.id} numColumns={2} />
      <Button title="Customize and Print" onPress={() => console.log('Customize and Print')} />
    </SafeAreaView>;
};

export default MomentsScreen;

const _styles = StyleSheet.create({
  xTQFHaaE: {
    width: 100,
    height: 100
  },
  hjitctWl: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});