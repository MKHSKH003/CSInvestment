import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, Dimensions,
  Alert, ScrollView, FlatList, Modal, TouchableHighlight
} from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import firebase from 'firebase';
import ImageLoad from 'react-native-image-placeholder';

import appsettings from '../../../app.json';

export default class UpdateSettings extends Component {

  constructor(props) {
    super(props);
    this.state = {
        selectedCourses: [],
        _modalVisible:false,
        imageUrl:"",
        password:""
    }
  }

  updateImage(id, username){
     this.props.updateImage(id, this.state.imageUrl, username);
     this.props.setModalVisible(false)
     this.setState({imageUrl:''})
  }
  updatePassword(id){
    this.props.updatePassword(id, this.state.password)
    this.props.setModalVisible(false)
    this.setState({password:''})
  }
  submit(id){
     this.props.updatePassword(id, this.state.password);
     this.props.updateImage(id, this.state.imageUrl, this.props.username);
     this.props.setModalVisible(false)
     this.setState({imageUrl:'',password:''})
  }
  
  async _pickImage(id, username) {
    const { Camera_roll, Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        this.post(result.uri, id, username);
      }
    }
    else {
      throw new Error('Camera roll permission not granted');
    }
  };


  async post(uri, id, username)
  {
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

    var ref = firebase.storage().ref().child("images/"+appsettings.Environment+"/StudentProfiles/"+Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    const snapshot = await ref.put(blob);
    
    this.props.updateImage(id, await snapshot.ref.getDownloadURL(), username);
    this.setState({imageUrl:''})
    blob.close();
  }

  render() {
    const { setModalVisible, updatePassword, modalVisible, item, updateImage, username } = this.props;
    const imagePlaceHolder = 'https://img.icons8.com/ios/48/000000/gender-neutral-user.png';
    return (
        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
          visible={modalVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    <TouchableOpacity onPress={()=> this._pickImage(item.id, username) } >
                      <ImageLoad
                        style={styles.image} 
                        loadingStyle={{ size: 'small', color: 'green' }}
                        source={{uri:item.image? item.image : imagePlaceHolder }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.name}>{item.name}</Text>
                    {item.courses!=='' &&
                    <Text style={styles.position}>{'Course(s): '+item.courses}</Text>
                    }
                     <Text style={styles.position}>{'Location: '+item.location}</Text>
                    <Text style={styles.position}>{'Payment Status: '+item.paymentStatus}</Text>
                    
                    <View >                   
                           
                    <TextField
                        baseColor={this.props.color}
                        tintColor={this.props.color}
                        label={"UPDATE PASSWORD"}
                        onChangeText={ (value) =>{ this.setState({password:value});}}
                    />
                    </View>
                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
                <TouchableOpacity onPress={() => { this.state.password && this.state.imageUrl? this.submit(item.id):
                                                  !this.state.password && this.state.imageUrl? this.updateImage(item.id, username):  
                                                   this.state.password &&!this.state.imageUrl? this.updatePassword(item.id): setModalVisible(false) 
                                                 }} 
                                  style={styles.btnClose}>
                  <Text style={styles.txtClose}>{this.state.password && this.state.imageUrl? "Submit": 
                                                !this.state.password && this.state.imageUrl? "Update Image" : 
                                                 this.state.password && !this.state.imageUrl? "Update Password" : "CANCEL"}
                  </Text>
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
    alignSelf:'center',
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
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 30
  },
  popupContent: {
    margin: 5,
    height:270,
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
    backgroundColor:'#20b2aa',
    width:125,
    padding:5,
    alignItems:'center',
  },
  modalInfo:{
     //alignItems:'center',
     //justifyContent:'center',
     alignSelf:'center'
  },
  txtClose:{
    alignItems:'center',
    justifyContent:'center',
  }
}); 