import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Keyboard
} from 'react-native';

import Header from '../../containers/header/header.js'
import Loader from '../loader/loading'

export default class ChatRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userMessage:'',
        toggleKeyboardOpen:false
    };
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this.setState({toggleKeyboardOpen:true}));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.setState({toggleKeyboardOpen:false}));
  }

  renderDate (date) {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  render() {
    const { currentUser, loading, sendMessage, id, groups }= this.props

    return (
      <View style={styles.container}>
        <Header props={this.props} />
        <Loader loading={loading}/>
        <FlatList style={styles.list}
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
          onLayout={() => this.flatList.scrollToEnd({animated: true})}
          data={(groups.filter(g => g.Id == id)[0]).Messages}
          keyExtractor= {(item) => {
            return (item.Id)+'';
          }}
          renderItem={(message) => {
            const item =!loading? message.item:[];
            let inMessage = item.Student.Name? (item.Student.Name).toLowerCase() !== (currentUser.Name).toLowerCase() : false;
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                <View style={[styles.balloon]}>
                  <Text>{item.UserMessage}</Text>
                </View>
                {!inMessage && this.renderDate(item.Date)}
                {inMessage && this.renderDate(item.Date+" "+item.Student.Name)}
              </View>
            )
          }}/>
          <View style={[styles.footer,[this.state.toggleKeyboardOpen && styles.inputContainerAlt]]}>
            <View style={[styles.inputContainer]}>
              <TextInput style={styles.inputs}
                  placeholder="Write a message..."
                  underlineColorAndroid='transparent'
                  value={this.state.userMessage}
                  onChangeText={(value) => this.setState({userMessage:value})}/>
            </View>

              <TouchableOpacity style={styles.btnSend} onPress={()=>{ if(this.state.userMessage.trim()) sendMessage(id, currentUser.Name, currentUser.Id, this.state.userMessage) ;this.setState({userMessage:''})}}>
                <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputContainerAlt:{
   marginBottom:270,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:'#16a085',
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
});  