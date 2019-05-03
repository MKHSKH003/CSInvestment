import React from 'react';
import {StyleSheet, Text, View, Button,Image, ActivityIndicator} from 'react-native';
import img from '../../images/loading_spinner.gif'
import Dimensions from 'Dimensions';

const DEVICE_HEIGHT = Dimensions.get('window').height;

let LoadingStudents = ({ loading }) => (
    loading ? 
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    :
    null
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop:(DEVICE_HEIGHT+30)/3
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default LoadingStudents;