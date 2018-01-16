import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        width: 200,
        height: 200,
    },
});

const data = [[
    [0,1],
    [1,3],
    [3,7],
    [4,9],
]];

class TestView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

  componentDidMount() {
     return fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD')
   }

    render() {
        return (
            <View style={styles.container}>
 
            </View>
        );
    }
}