import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'
import { TextField } from 'react-native-material-textfield';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  ScrollView
} from 'react-native';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courseSelected:[],
      date:"none",
      venue:"none"
    };
  }

  updateSchedule(id, username)
  {
     this.props.updateSchedule(id, this.state.date, this.state.venue, username)
     this.props.setUpdateScheduleVisible(false)
  }

  render() {

    const { setUpdateScheduleVisible, courseSelected, updateScheduleVisible, updateSchedule, username } = this.props;
    return (
      <View style={styles.container}>

        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => setUpdateScheduleVisible(false)}
          visible={updateScheduleVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    <Image style={styles.image} source={{uri: courseSelected.image}}/>
                    <Text style={styles.name}>{courseSelected.name}</Text>
                    <Text style={styles.position}>Venue: {courseSelected.venue}</Text>
                    <Text style={styles.about}>Time: {courseSelected.time}</Text>
              
                <DatePicker
                  style={{width: 200, marginTop:20, alignSelf:'center', alignItems:'center',justifyContent:'center'}}
                  date={this.state.date=="none"? "": this.state.date }
                  mode="datetime"
                  placeholder="select date"
                  format="YYYY-MM-DD HH:mm"
                  minDate="2019-01-01 00:00"
                  maxDate="2019-12-01 00:00"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {this.setState({date: date})}}
                />
                </ScrollView>
                <TextField
                    containerStyle={{marginBottom:10, marginLeft:90, marginRight:70}}
                    baseColor={this.props.color}
                    tintColor={this.props.color}
                    label={"Enter name of the venue"}
                    onChangeText={ (value) =>{ this.setState({venue:value});}}
                  />

              </View>
              <View style={styles.popupButtons}>
                <TouchableOpacity onPress={() => {this.state.date!="none" || this.state.venue!="none"? this.updateSchedule(courseSelected.id, username):setUpdateScheduleVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.txtClose}>{this.state.date!="none" || this.state.venue!="none"? 'Update schedule...' : 'Close'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
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
    width:200,
    height:150,
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
    //alignItems: 'center',
    margin: 5,
    height:350,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
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
    width:150,
    padding:5,
    alignItems:'center',
  },
  modalInfo:{
    alignItems:'center',
    justifyContent:'center',
  }
}); 