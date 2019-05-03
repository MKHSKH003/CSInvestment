import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {Text, View, Button, SafeAreaView} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import MyGrid from '../../containers/main-screen/grid';
import ImagesSlider from './image-slider';

let MainScreen=(bookingSuccess)=>(
    <Grid>
        <Row><ImagesSlider/></Row>
        <MyGrid/>
    </Grid>
    
);

export default MainScreen;