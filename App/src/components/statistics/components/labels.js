import React, { Component } from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid';
import {ScrollView, Text, View} from 'react-native';
import { Icon } from 'react-native-elements'

export default class ChartLables extends Component {
  constructor(props) {
      super(props);
      this.state={
      }
  }
 
  render() 
  {
    return (
            <View >
                <Row style={{alignSelf:'center'}}>
                    <Icon name='stop' color='#1abc9c' /><Text>Total Students</Text>
                    <Icon name='stop' color='#3498db' /><Text>Beginners course</Text>
                  </Row>
                  <Row style={{alignSelf:'center'}}>
                    <Icon name='stop' color='#34495e' /><Text>Intermediates course</Text>
                    <Icon name='stop' color='green' /><Text>Advance course</Text>
                   </Row>
           </View>
    );
  }
}


