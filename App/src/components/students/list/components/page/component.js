import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
  ScrollView, FlatList
} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';

import Header from '../../../../header/components/page/container';
import UpdateStudent from '../update-student';
import UpdateSettings from '../update-settings';

export default class Students extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      settingsVisible:false,
      itemSelected: 
        {
           StudentCourses: []
        },
    };

    this.setModalVisible = this.setModalVisible.bind(this);
    this.setSettingsVisible = this.setSettingsVisible.bind(this);
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setSettingsVisible(visible) {
    this.setState({settingsVisible: visible});
  }

  openModal(currentUser, username, isAdmin, item){
    if(isAdmin == 1){
      this.setState({modalVisible: true, itemSelected:item})
    }
    else if(currentUser.toLowerCase().trim() == username.toLowerCase().trim()){
      this.setState({settingsVisible: true, itemSelected:item})
    }
    
  }

  render() {
      const {students, updatePassword, addCourses, updatePaymentStatus, deleteStudent, updateImage, student, title} = this.props;
      const imagePlaceHolder = 'https://i.stack.imgur.com/l60Hf.png';
    return (
      <ScrollView>
      <Header props={this.props} title={title}/>
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={students}
          keyExtractor= {(item) => {
            return item.Id+"";
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <UpdateStudent
                      username={student.Name}
                      deleteStudent={deleteStudent} 
                      addCourses={addCourses} 
                      updatePaymentStatus={updatePaymentStatus} 
                      item={this.state.itemSelected}  
                      setModalVisible={this.setModalVisible} 
                      modalVisible={this.state.modalVisible}
                      updateImage = {updateImage}
                 />
                 <UpdateSettings
                      username={student.Name}
                      updatePassword={updatePassword} 
                      item={this.state.itemSelected}  
                      setModalVisible={this.setSettingsVisible} 
                      modalVisible={this.state.settingsVisible}
                      updateImage = {updateImage}
                 />
                {item.IsAdmin != 1 &&
                <TouchableOpacity onPress={()=>this.openModal(student.Name, item.Name, student.IsAdmin, item)}> 
                <ImageLoad
                      borderRadius={100}
                      resizeMode={'stretch'}
                      style={styles.cardImage}
                      loadingStyle={{ size: 'large', color: 'green' }}
                      source={{uri:item.Image? item.Image : imagePlaceHolder }}
                  />

                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.Name}</Text>
                    {student.IsAdmin == 1 && item.Cell!='' &&
                    <Text style={styles.description}>Cell : {item.Cell}</Text>
                    }
                    {item.Location!='' &&
                    <Text style={styles.description}>Location : {item.Location}</Text>
                    }
                    {item.StudentCourses.length!=0 && (student.IsAdmin == 1 || student.Id == item.Id) &&
                    <Text style={styles.description}>{item.StudentCourses.length > 1 ? 'Courses: ' : 'Course: '} {item.StudentCourses.map( sc => sc.Course.Name+" ")}</Text>
                    }
                    {student.IsAdmin == 1 && item.PaymentStatus !='' &&
                    <Text style={styles.time}>Status: {item.PaymentStatus}</Text>
                    }
                  </View>
                </View>
                </TouchableOpacity>
                }
              </View>
            )
          }}/>
          
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  cardImage:{
    flex: 1,
    height: 250,
    width:250,
    alignSelf:'center',
    marginTop :10,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },
 
});   