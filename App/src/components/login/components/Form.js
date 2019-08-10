import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import usernameImg from '../../../images/username.png';
import passwordImg from '../../../images/password.png';
import eyeImg from '../../../images/eye_black.png';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      toggleIconEye: false,
      username:'',
      password:'',
    };
    this.showPass = this.showPass.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

 componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this.setState({toggleIconEye:true}));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.setState({toggleIconEye:false}));
  }

updateUsername(value){
  this.setState({username:value})
}

updatePassword(value){
  this.setState({password:value})
}


onSubmit(){
  //this.setState({toggleIconEye:false})
}

  render() {
        const { userLogin, loading, deviceTokens } = this.props;

    return (
      <View  style={[styles.container,styles.responsiveBox ,[this.state.toggleIconEye && styles.btnEyeSAlt2]]}>
        <UserInput
          userEntry={this.updateUsername}
          onSubmit={this.onSubmit}
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}

        />
        
        <UserInput
          userEntry={this.updatePassword}
          onSubmit={this.onSubmit}
          style={styles.userInput}
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}>
          <Image source={eyeImg} style={[styles.iconEye, this.state.toggleIconEye && styles.btnEyeSAlt]} />
        </TouchableOpacity>
        
          <ButtonSubmit deviceTokens={deviceTokens} loading={loading} userLogin={userLogin} username={this.state.username} password={this.state.password} />
          
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  btnEye: {
    position: 'absolute',
    top: hp('0')+hp('12.5'),
    margin:5,
    right: 20,
  },
  btnEyeSAlt: {
     top: hp('0')+hp('-5'),
  },

  btnEye2: {
    position: 'absolute',
    top: hp('0')+hp('12.5'),
    margin:5,
    right: 20,
  },
  btnEyeSAlt2: {
     top: hp('0')+hp('-19'),   
     height: hp('30%'), 
  },

  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },

  userInput:{
   margin:20,
  },
  responsiveBox: {
    width: wp('84.5%'),
    height: hp('50%'),
    justifyContent: 'center' ,
    alignSelf:"center",

  }

});
