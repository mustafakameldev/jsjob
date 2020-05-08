import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from './components/Slides';

const SLIDE_DATA = [
    {
        text: 'welcome to JoApp',
        color:'#03A9F4'
    },
    {
        text:'Use this  to get job',
        color: '#009688'
    },
    {
        text: 'Set Your location, then swipe away',
        color: '#03A9F4'
    }
];
class WelcomeScreen extends Component {
    state = {  }
    onSildesComplete = () => {
        this.props.navigation.navigate('auth');
    }
    render() { 
        return ( <View style={{flex: 1}}>
           <Slides onComplete={this.onSildesComplete} style={{flex: 1}} data={SLIDE_DATA} />
        </View> );
    }
}
 
export default WelcomeScreen;
