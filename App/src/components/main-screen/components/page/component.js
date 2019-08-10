import React from 'react';
import { Row, Grid } from "react-native-easy-grid";

import MyGrid from './container';
import ImagesSlider from '../image-slider';

let MainScreen=()=>(
    <Grid>
        <Row><ImagesSlider/></Row>
        <MyGrid/>
    </Grid>
    
);

export default MainScreen;