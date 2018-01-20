import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button, Alert } from 'react-native';
import Networking from './app/components/Networking';
import Sidebar from './app/components/Sidebar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLoading: true,
      usd: 0,
    };
  }

  render() {

    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Blockchain Addict</Text>
        </View>
        <View style={styles.subContainer}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
       

        </View>
        <Networking/>
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
