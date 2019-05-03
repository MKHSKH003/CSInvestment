import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from '../containers/login/login';
import MainScreen from '../containers/main-screen/main';
import AddStudent from '../containers/students/add-student';
import ViewStudents from '../containers/students/load-students'
import Courses from '../containers/courses/load-courses'
import FinancialEducation from '../containers/financial-education/financial-education'
import Statistics from '../containers/statistics/statistics';
import ChatRooms from '../containers/chat-rooms/chat-rooms';
import ChatRoom from '../containers/chat-rooms/chat-room';
import MarketUpdates from '../containers/financial-education/market-updates'

export default class Routes extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
				 <Scene key="mainScreen"
	          component={MainScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
				 <Scene key="addStudent"
	          component={AddStudent}
	          animation='fade'
	          hideNavBar={true}
	         />
				 <Scene key="viewStudents"
	          component={ViewStudents}
	          animation='fade'
	          hideNavBar={true}
	         />
				 <Scene key="courses"
	          component={Courses}
	          animation='fade'
	          hideNavBar={true}
	         />
				 <Scene key="financialEducation"
	          component={FinancialEducation}
	          animation='fade'
	          hideNavBar={true}
	         />
				 <Scene key="statistics"
	          component={Statistics}
	          animation='fade'
	          hideNavBar={true}
	         />
				 <Scene key="chatrooms"
	          component={ChatRooms}
	          animation='fade'
	          hideNavBar={true}
	         />
					<Scene key="chatroom"
	          component={ChatRoom}
	          animation='fade'
	          hideNavBar={true}
	         />
					 <Scene key="marketUpdates"
	          component={MarketUpdates}
	          animation='fade'
	          hideNavBar={true}
	         />
	      </Scene>
	    </Router>
	  );
	}
}