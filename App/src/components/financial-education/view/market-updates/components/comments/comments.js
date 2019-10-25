import React, { useState, useEffect } from 'react';
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
  Modal,
  Button,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
const { width, height } = Dimensions.get('window');

const Comments = ({
  toggleCommentSection,
  commentProps,
  sendComment
}) => {
  const [comment, setComment] = useState('');
  const [comments, updateComment] = useState(commentProps.post.Comments); 

  send = () => {
    if (comment.length > 0) {
      commentProps.post.Comments = commentProps.post.Comments.concat({
        Id: Math.max(...commentProps.post.Comments.map(c => c.Id)) + 1,
        UserComment: comment,
        Student: commentProps.currentUser
      });
      updateComment(commentProps.post.Comments);
      sendComment({
        UserComment: comment,
        StudentID: commentProps.currentUser.Id,
        PostID: commentProps.post.Id
      });
      setComment('');
    }
  }

  _renderItem = ({ item }) => {
    if (item.Student.Id !== commentProps.currentUser.Id) {
      return (
        <View style={styles.eachMsg}>
          <Image source={{ uri: item.Student.Image }} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{item.UserComment}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.rightMsg} >
          <View style={styles.rightBlock} >
            <Text style={styles.rightTxt}>{item.UserComment}</Text>
          </View>
          {console.log('item.Student.Image', item.Student.Image)}
          <Image source={{ uri: item.Student.Image }} style={styles.userPic} />
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
        <TouchableOpacity onPress={() => toggleCommentSection(false)}>
          <Image source={{ uri: 'https://img.icons8.com/ios/48/000000/cancel.png' }} style={styles.closeIcon} />
        </TouchableOpacity>
        <FlatList
          style={styles.list}
          data={comments}
          keyExtractor={(item) => {
            return item.Id.toString();
          }}
          renderItem={item => _renderItem(item)}
        />
        <View style={styles.input}>
          <TextInput
            style={{ flex: 1 }}
            value={comment}
            placeholderTextColor="#696969"
            onChangeText={comment => setComment( comment )}
            blurOnSubmit={false}
            onSubmitEditing={() => send()}
            placeholder="Type a message"
            returnKeyType="send"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    height,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#075e54',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
    color: '#fff',
    fontWeight: '600',
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  input: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    borderColor: '#696969',
    borderWidth: 1,
  },
  eachMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
  },
  rightMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
    alignSelf: 'flex-end',
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  closeIcon: {
    height: 40,
    width: 40,
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'flex-end',
    margin: 5,
    alignSelf: 'flex-end',
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  rightBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#97c163',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  msgTxt: {
    fontSize: 15,
    color: '#555',
    fontWeight: '600',
  },
  rightTxt: {
    fontSize: 15,
    color: '#202020',
    fontWeight: '600',
  },
});


export default Comments;