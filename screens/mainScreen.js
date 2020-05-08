import React, { Component } from 'react';
import  { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DeckScreen  from './DeckScreen';
import MapScreen from './MapScreen'
import ReviewScreen from './ReviewScreen';
import SettingScreen from './SettingScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
class MainScreen extends Component {
     
    review = () => {
        return (
          <Stack.Navigator >
            <Stack.Screen 
                name="review" 
                component={ReviewScreen}
                options={{
                  headerTitle: 'review jobs',
                  
                }}
            />
            <Stack.Screen name="settings" component={SettingScreen} />
          </Stack.Navigator>
        );
      }
    
    render() {
        return ( 
    <NavigationContainer independent={true} >
      <Tab.Navigator>
        <Tab.Screen name="deck" component={DeckScreen}  />
        <Tab.Screen name="map" component={MapScreen} />
        <Tab.Screen name="review" component={this.review} />
      </Tab.Navigator>
    </NavigationContainer>
         );
    }
}
 
export default MainScreen;