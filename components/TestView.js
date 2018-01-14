import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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
}