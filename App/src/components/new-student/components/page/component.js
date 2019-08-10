import React, { Component } from 'react'
import {TouchableOpacity, StyleSheet, ScrollView, Text, View, Image} from 'react-native';
import SelectInput from '@tele2/react-native-select-input';

import spinner from '../../../../images/loading.gif';
import Inputs from '../../../students/list/components/input-section';
import Header from '../../../header/components/page/container';

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

  render(value) {
    const {username, loading, title, deviceTokens}=this.props
      
    return (
    <ScrollView>
        <Header props={this.props} title={title}/>
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
            
           <TouchableOpacity
            style={styles.button}
            onPress={()=> { if(!loading){
                this.props.addStudent(
                    this.state.name,
                    this.state.cell,
                    this.state.email,
                    this.state.location,
                    this.state.admin,
                    username,
                    deviceTokens
                )}}}
            activeOpacity={1}>
            {loading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <Text style={styles.text}>Submit</Text>
            )}
          </TouchableOpacity>

        </View>
    </ScrollView>
  );
 }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
        height: 40,
        borderRadius: 20,
        zIndex: 100,
      },
    image: {
      width: 25,
      height: 25,
    }
  });