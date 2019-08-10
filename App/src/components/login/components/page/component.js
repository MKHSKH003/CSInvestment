import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import LoginFailure from '../../../notifications/components/login-failure/container';
import Logo from '../Logo';
import Form from '../Form';
import Wallpaper from '../Wallpaper';
import { Row, Grid } from "react-native-easy-grid";

const LoginScreen = ({
  userLogin,
  loading,
  deviceTokens
}) => (
    <Grid>
      <Wallpaper >
        <LoginFailure />
        <Row>
          <Logo />
        </Row>
        <Row>
          <Form userLogin={userLogin} loading={loading} deviceTokens={deviceTokens} />
        </Row>
      </Wallpaper>
    </Grid>
);

export default LoginScreen;
