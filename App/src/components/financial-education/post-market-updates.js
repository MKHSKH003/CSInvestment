import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, Dimensions,
  Alert, ScrollView, FlatList, Modal, TouchableHighlight
} from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import firebase from 'firebase';

import appsettings from '../../../app.json';
import {pushNotificationsApi} from '../../api';

export default class PostMarketUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = {
        caption:"",
        image: null,
        selectedCourses: [],
        modalVisible:false,
        filePath: {},
    };
  }


   async _pickImage() {
    const { Camera_roll, Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        this.setState({ image: result.uri});
      }
    }
    else {
      throw new Error('Camera roll permission not granted');
    }
  };
  
  sendPushNotifications() {
   var notifications = [];
   this.props.devices.map((device) => {
        notifications.push({"to":device.deviceToken,"title":"CSInvestment","body":"New market update added.","sound":"default"});
    });
    pushNotificationsApi.sendPushNotifications(notifications);
  }

  async post(uri, caption) {
    this.sendPushNotifications();
    this.props.setModalVisible(false)
    if (!firebase.apps.length) {
    firebase.initializeApp(appsettings.FirebaseConfig);
    }
    
    const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    var ref = firebase.storage().ref().child("images/"+appsettings.Environment+"/MarketUpdates/"+Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    const snapshot = await ref.put(blob);
    
    this.props.PostMarketUpdates(await snapshot.ref.getDownloadURL(), caption);
    blob.close();
  }

  render() {
    let { image, caption } = this.state;
    const { setModalVisible, modalVisible } = this.props;
    return (
        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
          visible={modalVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView >
                    <TouchableOpacity style={styles.modalInfo}>
                    <Button
                        transparent={true}
                        style={{backgroundColor: '#4682B4',borderRadius:20, width:300}}
                        color='black'
                        title={"Upload update"}
                         onPress={this._pickImage.bind(this)}
                     />
        
                     {image &&
                      <Image source={{ uri: image }} style={{marginTop:20, marginBottom:20,borderRadius:7, width: 250, height: 250 }} />
                     }

                     </TouchableOpacity>
                    <TextField
                      containerStyle={{marginBottom:10, marginLeft:60, marginRight:50}}
                      baseColor={this.props.color}
                      tintColor={this.props.color}
                      label={"Enter Caption...."}
                      multiline={true}
                      onChangeText={ (value) =>{ this.setState({caption:value});}}
                    />
                </ScrollView>

                
              </View>
              <View style={styles.popupButtons}>
                <TouchableOpacity onPress={() => {image && caption ? this.post(image, caption):setModalVisible(false) }}  style={styles.btnClose}>
                  <Text style={styles.txtClose}>{image && caption ? 'UPLOAD':'CLOSE'} </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#eeeeee"
  },
  header:{
    backgroundColor: "#00CED1",
    height:200
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    flex:1,
  },
  detailContent:{
    top:80,
    height:500,
    width:Dimensions.get('screen').width - 90,
    marginHorizontal:30,
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  userList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:5,
  },



  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row'
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  about:{
    marginHorizontal:10
  },

  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
 /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 30
  },
  popupContent: {
    margin: 5,
    height:460,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent:'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose:{
    height:30,
    backgroundColor:'#4682B4',
    width:100,
    padding:5,
    alignItems:'center',
  },
  modalInfo:{
    alignItems:'center',
  },
  txtClose:{
    alignItems:'center',
    justifyContent:'center',
  }
}); 