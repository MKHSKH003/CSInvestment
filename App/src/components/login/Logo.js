import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';

import logoImg from '../../images/logo.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageLoad
            style={styles.image}
            loadingStyle={{ size: 'large', color: 'blue' }}
            source={logoImg}
        />
        <Text style={styles.text}>CS INVESTMENT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    width: 200,
    height: 200,
    
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
