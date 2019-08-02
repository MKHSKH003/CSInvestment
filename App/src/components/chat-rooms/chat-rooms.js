import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList
} from 'react-native'
import {Actions, ActionConst} from 'react-native-router-flux'
import Dimensions from 'Dimensions';

import Header from '../../containers/header/header.js'
import Loader from '../loader/loading'

const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class Groups extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  openGroup(Group, currentUser){
   //this.props.loadMessages(Group.id); 
   Actions.chatroom({color:"white",title:Group.name, currentUser: currentUser, id: Group.Id })
  }
  renderGroupMembers (group){
    const imagePlaceHolder = 'https://i.stack.imgur.com/l60Hf.png';
    if(group.members) {
      return (
        <View style={styles.groupMembersContent}>
          {group.members.map((prop, key) => {
            return (
              <Image key={key} style={styles.memberImage}  source={{uri:prop? prop:imagePlaceHolder}}/>
            );
          })}
        </View>
      );
    }
    return null;
  }

  render() {
      const {groups, loading, loadMessages, currentUser, sendInfo} = this.props
    return (
      <ScrollView>
      <Header props={this.props} />
      <FlatList
        style={styles.root}
        data={groups}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return (item.Id).toString();
        }}
        renderItem={(item) => {
          const Group = item.item;
          let mainContentStyle;
          if(Group.attachment) {
            mainContentStyle = styles.mainContent;
          }
          return(
            <TouchableOpacity onPress={()=>{ Group.StudentChatRooms.filter( scr => scr.StudentId == currentUser.Id).length > 0 || currentUser.IsAdmin == 1 ? this.openGroup(Group, currentUser) : sendInfo("Access Denied")}}>
            <View style={styles.container}>
              <Image source={{uri:Group.Avatar}} style={styles.avatar}/>
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.groupName}>{Group.Name}</Text>
                  </View>
                  <Text style={styles.countMembers}>
                    {Group.StudentChatRooms.length ==1 ? Group.StudentChatRooms.length+ ' member' : Group.StudentChatRooms.length+' members'}
                  </Text>
                  <Text style={styles.timeAgo}>
                    Keep up to date
                  </Text>
                  {this.renderGroupMembers(Group)}
                </View>
              </View>
            </View>
            </TouchableOpacity>
          );
        }}/>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16*1.5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start',
    height:DEVICE_HEIGHT/4.1
  },
  avatar: {
    width:55*2,
    height:55*2,
    borderRadius:25*2,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16*3,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  memberImage: {
    height: 30,
    width: 30,
    marginRight:4,
    borderRadius:10,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  countMembers:{
    color:"#20B2AA"
  },
  timeAgo:{
    fontSize:12,
    color:"#696969"
  },
  groupName:{
    fontSize:23,
    color:"#1E90FF"
  },
  groupMembersContent:{
    flexDirection:'row',
    marginTop:10
  }
});   