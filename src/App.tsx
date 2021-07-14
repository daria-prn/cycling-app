import React, { Component } from 'react';
import 'style/App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'style/Tabs.css';
import 'style/Collapsible.css';
import RideMode from 'components/RideMode/RideMode';
import RideHistoryDisplay2 from 'components/History/RideHistoryDisplay2';
import logo from 'images/logo.png';
import firebase from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBECHWwh5TAfCAGfyRhstjjR0o3WvZcsJY",
  authDomain: "iride-4738b.firebaseapp.com",
  projectId: "iride-4738b",
  storageBucket: "iride-4738b.appspot.com",
  messagingSenderId: "967339492977",
  appId: "1:967339492977:web:9137803a17d5c9a4b97dd0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class MainPage extends React.Component <{ctr : any}> {
  render() {
    return(
      <section><header>
      <img src={logo} alt="logo" />
      <h1>iCycle</h1></header>
      <Tabs defaultIndex={1}>
      <TabList>
      <Tab>Ride</Tab>
      <Tab>History</Tab>
      <Tab disabled>Goals</Tab>
      </TabList>
      <TabPanel><RideMode ctr = {this.props.ctr}/> </TabPanel>
      <TabPanel><RideHistoryDisplay2 ctr = {this.props.ctr} /></TabPanel>
      <TabPanel>empty</TabPanel>
      </Tabs></section>
    )
  }
}

class App extends Component <{ctr : any}> {
  render() {
    return (
      <MainPage ctr = {this.props.ctr}/>
    );
  }
}

export default App;
