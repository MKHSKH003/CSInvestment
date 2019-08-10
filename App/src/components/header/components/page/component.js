import React, { Component } from 'react';
import { Icon, Header } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

export default class ScreenHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

 render(){
      const { logout, username, title } = this.props
    return (
     <Header 
        leftComponent={{ icon: 'home', color: '#fff' ,onPress:()=>{Actions.mainScreen()}}} 
        centerComponent={{ text: title, style: { color: '#fff' } }}
        rightComponent={<Icon
                            name='power-off'
                            type='font-awesome'
                            color='#fff'
                            onPress={() => logout( username)} />}
        statusBarProps={{ barStyle: 'light-content' }} 
        containerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-around',
        }}
    />
    );
  }
}
