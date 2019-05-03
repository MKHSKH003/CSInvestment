import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {  StyleSheet, View  } from 'react-native';

import LoginFailure from '../../containers/notifications/login-failure';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import { Col, Row, Grid } from "react-native-easy-grid";


let LoginScreen = ({userLogin, loading})=> (
  <Grid>
        <Wallpaper >
          <LoginFailure  />
          <Row>
            <Logo />
          </Row>
          <Row> 
            <Form userLogin={userLogin} loading={loading}/>
          </Row>
        </Wallpaper>
        </Grid>
  
    );

export default LoginScreen;
