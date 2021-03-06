import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button
} from 'react-native';

import Header from '../../../header/components/page/container';
import UpdateSchedule from '../update-schedule';
import Dimensions from 'Dimensions';

const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class ViewCourses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      updateScheduleVisible:false,
      courseSelected:[],
    };
    this.setUpdateScheduleVisible = this.setUpdateScheduleVisible.bind(this);
  }
  
  setUpdateScheduleVisible(visible) {
    this.setState({updateScheduleVisible: visible})
  }
  render() {
    const {devices, courses, currentUser, updateSchedule, sendInfo, title} = this.props;
    return (
      <ScrollView>
      <Header props={this.props} title={title}/> 
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={courses}
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
              <ScrollView >
              <UpdateSchedule
                setUpdateScheduleVisible={this.setUpdateScheduleVisible}
                courseSelected={this.state.courseSelected}
                updateScheduleVisible={this.state.updateScheduleVisible}
                updateSchedule={updateSchedule}
                username={currentUser.name}
                devices={devices}
              />
              <TouchableOpacity style={styles.card} onPress={()=>this.props.currentUser.IsAdmin == 1? this.setState({updateScheduleVisible: true, courseSelected:item}) : sendInfo('You cannot update course schedule')}>
                <Image style={styles.cardImage} source={{uri:item.Image}}/>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.name}>{item.Name}</Text>
                    <Text style={styles.description}>{item.Description}</Text>
                    <Text style={styles.time}>Venue : {item.Venue}</Text>
                    <View style={styles.timeContainer}>
                      <Text style={styles.time}>Next Class : </Text>
                      <Image style={styles.iconData} source={{uri: 'https://png.icons8.com/color/96/3498db/calendar.png'}}/>
                      <Text style={styles.time}>{item.Time}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/96/000000/gender-neutral-user.png'}}/>
                        <Text style={styles.socialBarLabel}>{item.StudentCourses.length}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                        <Text style={styles.socialBarLabel}>{item.ChatRoom.Messages.length}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
              </ScrollView>
            )
          }}/>
      </View>
      </ScrollView > 
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
    height: DEVICE_HEIGHT/3,
    width: null,
  },
  /******** card components **************/
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center'
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
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   