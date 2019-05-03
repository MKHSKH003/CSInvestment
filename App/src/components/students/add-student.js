import React, { Component } from 'react'
import {Picker, ScrollView, Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {DatePickerIOS} from 'react-native';
import dateFormat from 'dateformat';
import SelectInput from '@tele2/react-native-select-input';
import SelectMultiple from 'react-native-select-multiple'

import Inputs from './input-section';
import Header from '../../containers/header/header.js';

export default class AddStudent extends Component {
  constructor(props) {
      super(props);
      this.state={
          name:null,
          cell:null,
          email:null,
          location:null,
          admin:'No',
      }
    this.name = this.name.bind(this);
    this.cell = this.cell.bind(this);
    this.email = this.email.bind(this);
    this.location = this.location.bind(this);
  }

  name(value){this.setState({name:value});}
  cell(value){this.setState({cell:value});}
  email(value){this.setState({email:value});}
  location(value){this.setState({location:value});}

  render(value) 
  {

      const {username, loading}=this.props
      
    return (
    <ScrollView>
        <Header props={this.props} />
        <View style={{flex: 0, margin:20}}>
            <Inputs  label={'Your name'} userEntry={this.name} />
            <Inputs  label={'Cell number'} isNumeric={true} userEntry={this.cell}/>
            <Inputs  label={'Email'} userEntry={this.email} />
            <Inputs  label={'Location'} userEntry={this.location} />            
             
            <View style={{fontSize: 15,marginTop:30}}>
                <Text style={{fontSize: 15}}>Is admin?</Text>
                <SelectInput 
                    value={this.state.admin} 
                    style={{fontSize:10}} 
                    options={[ { value: 'Yes', label: 'Yes', },
                               { value: 'No',  label: 'No', }
                             ]} 
                    onChange={(values) => {this.setState({admin:values})} }
                    />
            </View>
            
            <Button
                transparent={true}
                style={{backgroundColor: '#ECF0F1',}}
                color='green'
                title={loading? 'Loading...': 'Submit'}
                onPress={()=>
                    this.props.addStudent(
                        this.state.name,
                        this.state.cell,
                        this.state.email,
                        this.state.location,
                        this.state.admin,
                        username
                    )}
            />
        </View>
    </ScrollView>
  );
 }
}