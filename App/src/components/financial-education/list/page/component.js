import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImageLoad from 'react-native-image-placeholder';
import Dimensions from 'Dimensions';

import Header from '../../../header/components/page/container';

const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Market Updates",  image:require("../../../../images/market-updates.png"), description:"Market updates to keep up to date with the latest info & insights impacting the financial markets"} ,
        {id:2, title: "Video Tutorials", image:require("../../../../images/video-tutorials.jpg"), description:"Tutorials that need to be completed by students to track their progress."}
        ]
    };
  }

  navigation(title)
  {
    if(title == 'Market Updates'){
      Actions.marketUpdates({
        color: "green",
        title: "Market Updates"
      });
    }
    else{
     this.props.sendInfo("No "+(title+"").toLowerCase()+" available at the moment.");
    }
  }
  render() {
    return (
      <ScrollView>
      <Header props={this.props} title={this.props.title} />
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity onPress={()=> this.navigation(item.title)}> 
              <View style={styles.card}>
                <ImageLoad
                      style={{width: null, height: DEVICE_HEIGHT/3}}
                      loadingStyle={{ size: 'large', color: 'blue' }}
                      source={item.image}
                  />
                <View  style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>
                </View>
              </View>
              </TouchableOpacity>
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
    height: 150,
    width: null,
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