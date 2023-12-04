import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  type: 'image',
  url: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  type: 'video',
  url: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  type: 'audio',
  url: 'https://tinyurl.com/42evm3m3'
} // add more data as needed
];

const EditTogetherMediaScreen = () => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.itemContainer}>
      {item.type === 'image' && <Image source={{
      uri: item.url
    }} style={styles.image} />}
      {item.type !== 'image' && <View style={styles.mediaContainer}>
          <Text style={styles.mediaText}>{item.type.toUpperCase()}</Text>
        </View>}
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Arrange Your Media</Text>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} numColumns={2} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    margin: 20
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  mediaContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  },
  mediaText: {
    fontSize: 18,
    color: '#333'
  }
});
export default EditTogetherMediaScreen;