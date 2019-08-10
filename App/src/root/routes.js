import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from '../components/login/components/page/container';
import MainScreen from '../components/main-screen/components/page/component';
import AddStudent from '../components/new-student/components/page/container';
import ViewStudents from '../components/students/list/components/page/container'
import Courses from '../components/courses/components/page/container'
import FinancialEducation from '../components/financial-education/list/components/page/container'
import Statistics from '../components/statistics/components/page/container';
import ChatRooms from '../components/chat-room/list/components/page/container';
import ChatRoom from '../components/chat-room/view/components/page/container';
import MarketUpdates from '../components/financial-education/view/components/market-updates/components/page/container'

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