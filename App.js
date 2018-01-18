import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button, Alert } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      usd: 0,
    };
  }
  componentDidMount() {
    return fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then((response) => response.json())
    .then((responseJson) => {
        let usd = responseJson.USD;
        this.setState({usd});
    })
    .catch((error) => {
        console.error(error);
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Blockchain Addict {this.state.usd} </Text>
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
        <Button 
          onPress={() => {
              Alert.alert('You tapped the button!');
            }
          }
          title='Click Here'
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
    fontFamily: 'normal',
    fontSize: 30,
    color:'#CCCCCC', 
  },
});
