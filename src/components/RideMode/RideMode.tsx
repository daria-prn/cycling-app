import { Component } from 'react';
import 'style/App.css';
import React from 'react';
import 'MVC/Controller.tsx'
import Controller from 'MVC/Controller';
import { Stopwatch } from './StopWatch';

interface IAddRideComponents{
                  startTime: Date, 
                  endTime: Date,
                  startPlace: string, 
                  endPlace: string, 
                  distance: number,
                  onStartRidePage: boolean,
                  onDisplayPage: boolean
}

class RideMode extends Component <{ctr: Controller}, IAddRideComponents>{
  constructor(props: any) {
  super(props)
  this.state = { 
                  startTime: new Date(), 
                  endTime: new Date(),
                  startPlace: '', 
                  endPlace: '', 
                  distance: 0.1, //manual input at the moment
                  onStartRidePage: true,
                  onDisplayPage: false
                 }  

  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleStartRideClick = this.handleStartRideClick.bind(this)
  this.handleStopRideClick = this.handleStopRideClick.bind(this)
  this.handleReturnClick = this.handleReturnClick.bind(this)
  this.handleAddCompletedRide = this.handleAddCompletedRide.bind(this)
  }

  public handleSubmit(e: any) {  
  e.preventDefault()    
  }

  public handleStartRideClick(){
    let startLocation = (document.getElementById('inputStartLocation') as HTMLInputElement).value
    let finishLocation = (document.getElementById('inputStopLocation') as HTMLInputElement).value
    console.log(startLocation )
      if (startLocation.trim() !== ''){
        this.setState({startPlace: (startLocation)})
        
      }
      if (finishLocation.trim() !== ''){
        this.setState({endPlace: (finishLocation)})
      }
      
    let timeStarted = new Date();    
    this.setState({startTime: (timeStarted)})
    this.setState({onStartRidePage: false}) 
  }
  
  public handleStopRideClick() {
    let timeStopped = new Date();
    this.setState({endTime: (timeStopped)})
   this.setState({onDisplayPage: true})
  }
  public handleReturnClick(){
    this.setState({onStartRidePage: true})
    this.setState({onDisplayPage: false})
  }
  public handleAddCompletedRide(){
      //the data that wants to add in the controller
      this.props.ctr.load()
      this.props.ctr.addCompletedRide(this.state.startTime, this.state.endTime, this.state.startPlace, this.state.endPlace, this.state.distance)   
      //this.props.ctr.save()
      alert("Ride finished added");
      this.setState({onStartRidePage: true})
      this.setState({onDisplayPage: false})
  }
 
  render() {
    let display;
    if (this.state.onDisplayPage){
      display = 'none'
    }else 
      display = 'flex'
    return (
        
    <div>{this.state.onStartRidePage ? 
      <section id='startRidePage' className='App' style={{display:display}}>
      <h2>Start a new ride</h2>
      <div className='inputSpace'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input id='inputStartLocation' type="text" placeholder="Starting location"></input>
          </div>
          <div>
            <input id='inputStopLocation' type="text" placeholder="Destination location"></input>
          </div>
          <button id='startBtn' className="button" onClick={this.handleStartRideClick} type="submit">Start 
        </button>
        </form>
        
      </div>
    </section>
    :
    <section id='whileOnRide' className='App' style={{display:display}}>
         <Stopwatch />
         <div className='col'>
         <button className='button' id='pauseBtn'>Pause</button>
         <button className='button' id='stopBtn' onClick={this.handleStopRideClick} type="submit">Stop</button>
         </div>
      </section>
     }
     {this.state.onDisplayPage ? <div id='displayFinishedRide' className='App'>
       <table>
         <thead>
           <tr>
            <th>Finished Ride</th>
          </tr>         
         </thead>
        <tbody>
          <tr>Title: {`${this.state.startPlace}-${this.state.endPlace}`} </tr>
          <tr>Date: {this.state.startTime.toLocaleDateString()} </tr>
          <tr>Time started: {this.state.startTime.toLocaleTimeString()} </tr>
          <tr>Time finished: {this.state.endTime.toLocaleTimeString()} </tr>
          <tr>Start Location: {this.state.startPlace} </tr>
          <tr>Finish Location: {this.state.endPlace} </tr>
          <tr>Distance: {this.state.distance} </tr>
      
        </tbody>
       
       
       </table>
       <div className='col'>
        <button className='button' onClick={this.handleReturnClick} type="submit" id='returnBtn'>RETURN</button>
        <button className='button' onClick={this.handleAddCompletedRide} type="submit" id='saveBtn'>SAVE RIDE</button>
       </div>
       
       
     </div> : <div style={{display:'none'}}>too cool</div>}
    </div>
    );
  }
}

  export default RideMode;