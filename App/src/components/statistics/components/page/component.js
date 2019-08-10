import React, { Component } from 'react'
import {ScrollView, View, Text} from 'react-native';

import Header from '../../../header/components/page/container';
import PieChartWithCenteredLabels from '../pie-chart';
import ChartLables from '../labels';

export default class Statistics extends Component {
  constructor(props) {
      super(props);
      this.state={
      }
  }
 
  render() {
    return (
        <ScrollView >
            <Header props={this.props} title={this.props.title}/>
            <Text style={{textAlign:'center',fontSize:25, color:'#34495e',marginTop:30}}>Student - Courses</Text>
            <PieChartWithCenteredLabels studentCourses={this.props.studentCourses} students={this.props.students}/>
            <ChartLables/>
         </ScrollView>
    );
  }
}