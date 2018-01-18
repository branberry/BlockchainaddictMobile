import React, { Component } from 'react';
import styles from './styles.js';

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiCall: {},
            usd: 0,
        }
    }


    Render() {
        return(
            <View> 
            {this.state.usd}
            </View>
        );
    }
 }