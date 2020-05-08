import { AsyncStorage } from 'react-native';
import * as Facebook  from 'expo-facebook' ;
import { FACEBOOK_LOGIN_SUCCESS,
     FACEBOOK_LOGIN_FAIL } from './types';


export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if(token) {
      //dispatch if have token already 
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, pyload: token });
  }else {
        // start up fb login process
        doFacebookLogin(dispatch);
    }
}

const  doFacebookLogin = async dispatch => {
    
    const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('1533539566825184', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
          .then(response => response.json())
          .then(data => {
            setLoggedinStatus(true);
            setUserData(data);
          })
          .catch(e => console.log(e))
      } else {
        // type === 'cancel'
      }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
