import React, { Component } from 'react';
import { Icon, Input, Button, ThemeProvider, Header } from 'react-native-elements'
import {Actions, ActionConst} from 'react-native-router-flux'

export default class ScreenHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

 render(){
      const {props, logout, username } = this.props
    return (
     <Header 
        leftComponent={{ icon: 'home', color: '#fff' ,onPress:()=>{Actions.mainScreen()}}} 
        centerComponent={{ text: props.title, style: { color: '#fff' } }}
        rightComponent={<Icon
                            name='power-off'
                            type='font-awesome'
                            color='#fff'
                            onPress={() => logout( username)} />}
        statusBarProps={{ barStyle: 'light-content' }} 
        containerStyle={{
            backgroundColor: props.color,
            justifyContent: 'space-around',
        }}
    />
    );
  }
}
