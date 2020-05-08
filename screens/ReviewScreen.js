import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'
 export default class ReviewScreen extends Component {
  
   
    render() { 
        
        return (  
        <View>
            <View style={{alignItems: "flex-end"}}>
            <Button 
                title="Settings"
                onPress={ () => this.props.navigation.navigate('settings')}
                 
                 />
               
            </View>
            <Text>
                ReviewScreen
            </Text>
             <Text>
                ReviewScreen
            </Text>
            <Text>
                ReviewScreen
            </Text>
            <Text>
                ReviewScreen
            </Text>
            <Text>
                ReviewScreen
            </Text>
            <Text>
                Review
            </Text>
           
        </View> );
    }
}