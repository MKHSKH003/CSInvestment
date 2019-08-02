import React, { Component } from 'react'
import { TextField } from 'react-native-material-textfield';
import {ScrollView, View, Text} from 'react-native';

import Header from '../../containers/header/header.js';
import PieChartWithCenteredLabels from './pie-chart';
import ChartLables from './labels';
import LoadingStudents from '../../containers/students/loading-students';

export default class Statistics extends Component {
  constructor(props) {
      super(props);
      this.state={
      }
  }
 
  render() 
  {
    return (
        <ScrollView >
            <Header props={this.props}/>
            <Text style={{textAlign:'center',fontSize:25, color:'#34495e',marginTop:30}}>Student - Courses</Text>
            <PieChartWithCenteredLabels studentCourses={this.props.studentCourses} students={this.props.students}/>
            <ChartLables/>
         </ScrollView>
    );
  }
}