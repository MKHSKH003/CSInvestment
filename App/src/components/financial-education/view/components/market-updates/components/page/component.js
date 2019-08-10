import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Modal
} from 'react-native';
import FitImage from 'react-native-fit-image';

import Header from '../../../../../../header/components/page/container';
import PostMarketUpdate from '../post-market-updates';

export default class MarketUpdates extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      width:0,
      height:0,
      itemId: "",
      deleteModalVisible:false,
      data: [
        {id:1,  image:require("../../../../../../../images/video-tutorials.jpg"), caption:"Tutorials that need to be completed by students to track their progress.", datetime:"19-Mar-2019 08:00"},
        {id:2,  image:require("../../../../../../../images/market-updates.png"),  caption:"Market updates to keep up to date with the latest info & insights impacting the financial markets", datetime:"19-Mar-2019 08:00"} 
        ]
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  setDeleteModalVisible(visible) {
    this.setState({deleteModalVisible: visible});
  }

  delete(id){
    this.setDeleteModalVisible(false)
    this.props.deleteMarketUpdate(id);
  }

  openDeleteModal(id){
    this.setState({itemId: id});
    this.setDeleteModalVisible(true)
    
  }

  getImageHeight(url){
    Image.getSize(url, (w, h) => {
      return h;
    })
  }
  
  getImageWidth(url){
    Image.getSize(url, (w, h) => {
      return w;
    })
  }

  render() {
    const {marketUpdates, loading, PostMarketUpdates, currentUser, devices, title} = this.props;
    return (
      <ScrollView>
      <Header props={this.props} title={title}/>
      
      {!loading && currentUser.IsAdmin == 1 &&
        <TouchableOpacity
          style={styles.button}
          onPress={()=> this.setState({modalVisible: true})}
          activeOpacity={1}>
          <Text style={styles.text}>Post</Text>
        </TouchableOpacity>
      }
      <View style={styles.container}>
        <PostMarketUpdate 
           setModalVisible={this.setModalVisible} 
           modalVisible={this.state.modalVisible}
           PostMarketUpdates={PostMarketUpdates}
           devices={devices}
        />
        <FlatList style={styles.list}
          data={marketUpdates}
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
              <TouchableOpacity onPress={()=>currentUser.IsAdmin == 1 && this.openDeleteModal(item.Id)}> 
              <View style={styles.card}>
                  <FitImage
                      indicator={true} // disable loading indicator
                      indicatorColor="red" // react native colors or color codes like #919191
                      indicatorSize="large" // (small | large) or integer
                      source={{ uri: item.Avatar }}
                      resizeMode="contain"
                    />
                  <View  style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.Caption}</Text>
                    <Text style={styles.description}>{item.datetime}</Text>
                  </View>
                </View>
              </View>
              </TouchableOpacity>
            )
          }}/>

        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.setDeleteModalVisible(false)}
          visible={this.state.deleteModalVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    <Text style={styles.message}>"You about to delete the update!"</Text>
                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
                <View >
                  <TouchableOpacity onPress={() => this.delete(this.state.itemId) } style={styles.btnClose}>
                    <Text style={styles.txtClose}>DELETE</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={{marginLeft:10}}>
                  <TouchableOpacity onPress={() => this.setDeleteModalVisible(false) } style={styles.btnClose}>
                    <Text style={styles.txtClose}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

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
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
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
    height: 150,
    width: null,
  },
  /******** card components **************Image source={{uri:"data:image/png;base64," + item.avatar}} style={ styles.avatar  } />**/

  avatar:{
    flex: 1,
    alignSelf: 'center',
  },
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
  post:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#008080",
      fontWeight:'bold'
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /************ modals ************/
  message:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  popup: {
    backgroundColor: 'white',
    marginTop: 250,
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
    height:30,
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
    width:100,
    padding:5,
    backgroundColor:'#20b2aa',
    alignItems:'center', 
  },
  modalInfo:{
    alignItems:'center',
    justifyContent:'center',
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