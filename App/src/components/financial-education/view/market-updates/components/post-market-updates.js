import React, { useState } from 'react';
import { TextField } from 'react-native-material-textfield';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, Dimensions,
  ScrollView, Modal,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase';

import appsettings from '../../../../../../app.json'
import sendPushNotifications from '../../../../../shared/utils/send-push-notifications'

export default PostMarketUpdate = ({
  devices,
  setModalVisible,
  modalVisible,
  currentUser,
  onPostMarketUpdates
}) => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const _pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
    else {
      throw new Error('Camera roll permission not granted');
    }
  };

  const post = async (uri, caption) => {
    sendPushNotifications(devices, "New market update added.");
    setModalVisible(false)
    if (!firebase.apps.length) {
      firebase.initializeApp(appsettings.FirebaseConfig);
    }

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    var ref = firebase.storage().ref().child("images/" + appsettings.Environment + "/MarketUpdates/" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    const snapshot = await ref.put(blob);

    onPostMarketUpdates(await snapshot.ref.getDownloadURL(), caption, currentUser);
    blob.close();
  }

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
                <TouchableOpacity
                  style={styles.button}
                  onPress={ () => _pickImage()}
                  activeOpacity={1}>
                  <Text style={styles.text}>Upload update</Text>
                </TouchableOpacity>

                {image &&
                  <Image source={{ uri: image }} style={{ marginTop: 20, marginBottom: 20, borderRadius: 7, width: 250, height: 250 }} />
                }

              </TouchableOpacity>
              <TextField
                containerStyle={{ marginBottom: 10, marginLeft: 60, marginRight: 50 }}
                baseColor={'black'}
                tintColor={'blue'}
                label={'Enter Caption....'}
                multiline={true}
                onChangeText={(value) => setCaption(value)}
              />
            </ScrollView>


          </View>
          <View style={styles.popupButtons}>
            <TouchableOpacity onPress={() => { image && caption ? post(image, caption) : setModalVisible(false) }} style={styles.btnClose}>
              <Text style={styles.txtClose}>{image && caption ? 'UPLOAD' : 'CLOSE'} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#eeeeee"
  },
  header: {
    backgroundColor: "#00CED1",
    height: 200
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
    flex: 1,
  },
  detailContent: {
    top: 80,
    height: 500,
    width: Dimensions.get('screen').width - 90,
    marginHorizontal: 30,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: "#ffffff"
  },
  userList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 5,
  },



  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row'
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#008080",
    fontWeight: 'bold'
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#696969"
  },
  about: {
    marginHorizontal: 10
  },

  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
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
    height: 460,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent: 'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose: {
    height: 30,
    backgroundColor: '#4682B4',
    width: 100,
    padding: 5,
    alignItems: 'center',
  },
  modalInfo: {
    alignItems: 'center',
  },
  txtClose: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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