import React, { Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './store/index';
import AuthScreen  from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MainScreen from './screens/mainScreen';



const Tab = createBottomTabNavigator();

class App extends Component {
  
  render() {
    
    return ( 
    <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="welcome" component={WelcomeScreen} />
            <Tab.Screen name="auth" component={AuthScreen} />
            <Tab.Screen name="main" component={MainScreen}   />
          </Tab.Navigator>
        </NavigationContainer>
        </Provider>
    
     );
  }
  
}

export default App;
