import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { SuperGridSectionList } from 'react-native-super-grid';
import {Actions, ActionConst} from 'react-native-router-flux';
import ImageLoad from 'react-native-image-placeholder';
import { Permissions, Notifications } from 'expo';

import student from '../../images/menu-options/student.png';
import profit from '../../images/menu-options/profit.png';
import students from '../../images/menu-options/students.png';
import courses from '../../images/menu-options/courses.png';
import statistics from '../../images/menu-options/statistics.png';
import chat from '../../images/menu-options/chat.png';

export default class MainGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
           data: [
                { name: 'NEW STUDENT', code: '#1abc9c',image:student }, 
                { name: 'STUDENTS', code: '#2ecc71',image:students },
                { name: 'COURSES', code: '#3498db',image:courses }, 
                { name: 'FINANCIAL EDUCATION', code: '#9b59b6',image:profit},
                { name: 'STATISTICS', code: '#34495e' ,image:statistics}, 
                { name: 'CHAT ROOM', code: '#16a085',image:chat },
            ]
        }
      ]
    };
    this.navigate = this.navigate.bind(this);

  }
  
  openStats(screen, color){
    this.props.onLoadStudents();
    Actions.statistics({color:color,title:screen})
  }
  navigate(screen, color){
     if(screen =='NEW STUDENT'){this.props.currentUser.isAdmin == 1 ? Actions.addStudent({color:color,title:screen}) : this.props.sendInfo("Access denied");}
     else if(screen =='STUDENTS'){this.props.onLoadStudents();Actions.viewStudents({color:color,title:screen});}
     else if(screen =='COURSES'){this.props.onLoadMessages();this.props.onLoadStudentCourses();this.props.onLoadStudentCourses();this.props.onLoadCourses();Actions.courses({color:color,title:screen});}
     else if(screen =='FINANCIAL EDUCATION'){Actions.financialEducation({color:color,title:screen});}  
     else if(screen =='STATISTICS'){this.props.currentUser.isAdmin == 1 ? this.openStats(screen, color): this.props.sendInfo("Access Denied") } 
     else if(screen =='CHAT ROOM'){this.props.onLoadGroups();Actions.chatrooms({color:color,title:screen});}  
  }

  componentDidMount(){
        //this.props.currentUser = {'id':36, 'name':'skhumbuzo','isAdmin':1} 
    this.registerForPushNotificationsAsync();
  }
  
  async registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
     );
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();

    this.props.storeUserDevice(this.props.currentUser.id, this.props.currentUser.name, token);
  }

  render() {
    return (
      <SuperGridSectionList
        itemDimension={120}
        sections={this.state.items}
        style={styles.gridView}
        renderItem={({ item }) => (
         <TouchableOpacity onPress={()=>this.navigate(item.name,item.code)}> 
          <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
            <ImageLoad
                style={styles.icon }
                loadingStyle={{ size: 'small', color: 'green' }}
                source={item.image}
            />
            <Text style={styles.itemCode}>{item.name}</Text>
          </View>
         </TouchableOpacity>
        )}
       
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 5,
    flex: 1,
  },
  itemContainer: {
    borderRadius: 0,
    padding: 10,
    height: 175,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: 'black',
  },

   icon: {
    width:60,
    height:60,
  },
});