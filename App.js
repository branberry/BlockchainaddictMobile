import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={styles.titleText}>Hello {this.props.name}!</Text>
    );
  }
 }

 class Blink extends Component {
   constructor(props) {
     super(props);
     this.state = {isShowingText: true};
   }

   render() {
     return (
       <Text>Hi</Text>
     );
   }
 }

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Blockchain Addict </Text>
        </View>
        <View style={styles.subContainer}>
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
    fontSize: 30,
    color:'#CCCCCC', 
  },
});
