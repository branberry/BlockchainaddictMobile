import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Blockchain Addict </Text>
        </View>
        <View style={styles.subContainer}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate"
          onChangeText={(text) => this.setState({text})}
        />
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
    fontFamily: 'monospace',
    fontSize: 30,
    color:'#CCCCCC', 
  },
});
