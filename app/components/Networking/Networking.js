import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import styles from './styles'

export default class Networking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usd: 0,
        }
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
        return(
            <View style={{flex: 1}}> 
                <Button 
                onPress={() => {
                    Alert.alert('Bitcoin\'s price: ' + this.state.usd);
                    }
                }
                title='Bitcoin Value'
                />
            </View>
        );
    }
}