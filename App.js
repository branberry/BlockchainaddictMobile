import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button, Alert } from 'react-native';
import Networking from './app/components/Networking';
import Sidebar from './app/components/Sidebar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      usd: 0,
    };
  }

  render() {

    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Your Portfolio</Text>
        </View>
        <View style={styles.subContainer}>
        <Sidebar/>
        <Networking/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E4057',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 8,
    backgroundColor: '#FFFFFF',
  },
  titleText : {
    fontFamily: 'normal',
    fontSize: 30,
    color:'#CCCCCC', 
  },
});
