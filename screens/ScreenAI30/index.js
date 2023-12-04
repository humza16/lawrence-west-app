import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TextInput } from 'react-native';

const CRMSection = () => {
  const [contacts, setContacts] = useState([{
    id: '1',
    name: 'John Doe',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    name: 'Jane Doe',
    image: 'https://tinyurl.com/42evm3m3'
  } // Add more contacts as needed
  ]);
  const [events, setEvents] = useState([{
    id: '1',
    title: 'Meeting with John',
    date: '2021-09-20',
    contacts: ['1']
  }, {
    id: '2',
    title: 'Lunch with Jane',
    date: '2021-09-21',
    contacts: ['2']
  } // Add more events as needed
  ]);

  const renderContact = ({
    item
  }) => <View style={_styles.JflICOCf}>
      <Image source={{
      uri: item.image
    }} style={_styles.jYxuhvqB} />
      <Text style={_styles.SVqAcjwA}>{item.name}</Text>
    </View>;

  const renderEvent = ({
    item
  }) => <View style={_styles.SFyWdUCK}>
      <Text style={_styles.mugRsORP}>{item.title}</Text>
      <Text style={_styles.vjPAWqTf}>{item.date}</Text>
      <View style={_styles.WsqQSiyj}>
        {item.contacts.map(contactId => {
        const contact = contacts.find(c => c.id === contactId);
        return <Image key={contactId} source={{
          uri: contact.image
        }} style={_styles.EWcZXvgZ} />;
      })}
      </View>
    </View>;

  return <SafeAreaView style={_styles.sfazzxdY}>
      <View style={_styles.xfNRedhG}>
        <Text style={_styles.BEOCdsxo}>CRM Section</Text>
        <TextInput placeholder="Search contacts..." style={_styles.ntDMHzEH} />
        <FlatList data={contacts} renderItem={renderContact} keyExtractor={item => item.id} horizontal style={_styles.uxvYhGRU} />
        <Text style={_styles.KbbCktNj}>Events</Text>
        <FlatList data={events} renderItem={renderEvent} keyExtractor={item => item.id} style={_styles.cphvNtKe} />
      </View>
    </SafeAreaView>;
};

export default CRMSection;

const _styles = StyleSheet.create({
  JflICOCf: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10
  },
  jYxuhvqB: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  SVqAcjwA: {
    marginLeft: 10
  },
  SFyWdUCK: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  mugRsORP: {
    fontSize: 18,
    fontWeight: "bold"
  },
  vjPAWqTf: {
    color: "#888"
  },
  WsqQSiyj: {
    flexDirection: "row",
    marginTop: 10
  },
  EWcZXvgZ: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  sfazzxdY: {
    flex: 1
  },
  xfNRedhG: {
    padding: 20
  },
  BEOCdsxo: {
    fontSize: 24,
    fontWeight: "bold"
  },
  ntDMHzEH: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5
  },
  uxvYhGRU: {
    marginTop: 20
  },
  KbbCktNj: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  cphvNtKe: {
    marginTop: 20
  }
});