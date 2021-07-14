import React from "react"
import DisplayRide from "./DisplayRide"
import Collapsible from 'react-collapsible';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


class RideHistoryDisplay2 extends React.Component <{ctr : any}, {rides : any}, {message:any}> {
    constructor(props:any) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleDeleteRide = this.handleDeleteRide.bind(this)
      this.handleSorting = this.handleSorting.bind(this)
      this.displayStatistics = this.displayStatistics.bind(this)
      this.state = { 
          rides : this.props.ctr.getAllRides()
        }}
    
    handleSubmit(e:any) {  
        e.preventDefault()
        let startTime : string = (document.getElementById("start-time") as HTMLInputElement).value
        let finishTime : string = (document.getElementById("finish-time") as HTMLInputElement).value
        let startLocation : string = (document.getElementById("start-location") as HTMLInputElement).value
        let finishLocation : string = (document.getElementById("finish-location") as HTMLInputElement).value
        let distance  = (document.getElementById("distance") as HTMLInputElement).value
        if (startTime !== '' && finishTime !== '' && startLocation !== ''
         && finishLocation  !== '' && distance !== '') {
             this.props.ctr.addHistoryRide(startTime, finishTime, startLocation, finishLocation, distance)
             this.setState({
              rides: [this.props.ctr.getAllRides()]
            })
        }
        e.target.reset()
    }

    handleDeleteRide( id : any) {
      let targetRideId : any = id
      this.props.ctr.removeRide(targetRideId)
      this.setState({
        rides: [this.props.ctr.getAllRides()]
      })
    }

    handleSorting (eventKey : any){
      let action = parseInt(eventKey)
      let sortedRides : any = this.props.ctr.sort(action)
      this.setState({rides: [sortedRides]})
      }
    
      displayStatistics(value :any) {
        switch(value) {
          case "distance":{return this.props.ctr.getTotalDistance(this.props.ctr.getAllRides())}
          case "duration": {return this.props.ctr.getTotalDuration(this.props.ctr.getAllRides())}
          case "rides": {return this.props.ctr.getTotalRides(this.props.ctr.getAllRides())}
        }
    }

    render() {
      return(
        <section id="display-ride-history">
        <Collapsible trigger = "Add a ride" triggerWhenOpen="Close">
        <section id="add-ride">
        <h3>Add a ride</h3>
        <form onSubmit={this.handleSubmit}>
        <label className="add-ride">Start time</label>
        <input type="datetime-local" id="start-time" placeholder="Start time" step="1" />

        <label className="add-ride">Finish time</label>
        <input type="datetime-local" id="finish-time" placeholder="finish time" step="1"  />

        <label className="add-ride">Start location</label>
        <input type="text" id="start-location" placeholder="Start location" />
        <label className="add-ride">Finish location</label>
        <input type="text" id="finish-location" placeholder="Finish location" />
        <label className="add-ride">Distance</label>
        <input type="number" id="distance" placeholder="Distance" step="0.1" />
        <button type="submit" className="button">Add</button>   
    </form>
    </section>
    </Collapsible>

    <Collapsible trigger="Summary" triggerWhenOpen="Close">
    <section id="rides-summary">
    <h3>Summary</h3>
    <span className = "statistics-number" id="rides-count"> {this.displayStatistics("rides")} </span>
    <p className="statistics-word">rides</p>
    <span className = "statistics-number">{this.displayStatistics("distance")}
    <p className="statistics-word">kilometeres</p>  </span>
    <span className="statistics-number">{this.displayStatistics("duration")} </span>
    </section>
    </Collapsible>

    <section><h2>Ride History</h2>
    <nav className = "display-btns"><DropdownButton 
    id="dropdown-basic-button" 
    title="Sort by" 
    onSelect={this.handleSorting}
    drop='down'>
    <Dropdown.Item eventKey="1" disabled>Title (A-Z)</Dropdown.Item>
    <Dropdown.Item eventKey="2" disabled>Title (Z-A)</Dropdown.Item>
    <Dropdown.Item eventKey="3">Duration (low-high)</Dropdown.Item>
    <Dropdown.Item eventKey="4">Duration (high-low)</Dropdown.Item>
    <Dropdown.Item eventKey="5">Speed (low-high)</Dropdown.Item>
    <Dropdown.Item eventKey="6">Speed (high-low)</Dropdown.Item>
    <Dropdown.Item eventKey="7">Distance (low-high)</Dropdown.Item>
    <Dropdown.Item eventKey="8">Distance (high-low)</Dropdown.Item>
    </DropdownButton>
    </nav>
    <ul id='ride-history'>
    {this.props.ctr.getAllRides().length === 0 &&
    <span id = "message">There are no rides, please add some</span>
    }
     {this.props.ctr.getAllRides().length > 0 &&
      this.props.ctr.getAllRides().map(
        (ride: {
          id: any,
          title: any,
          startTime: any,
          date: any,
          finishTime: any,
          startLocation: any,
          finishLocation: any,
          duration: any,
          speed: any,
          distance: any,
        }) => (
            <DisplayRide
              key={ride.id}
              title={ride.title}
              startTime={ride.startTime.toLocaleTimeString()}
              date={ride.startTime.toLocaleDateString()}
              finishTime={ride.finishTime.toLocaleTimeString()}
              startLocation={ride.startLocation}
              finishLocation={ride.finishLocation}
              duration={ride.duration}
              speed={ride.speed}
              distance={ride.distance}
              handleDeleteRide={this.handleDeleteRide.bind(this,ride.id)}
            />
          )
      )}
    
    </ul>
    </section>
    </section>
      )
        }
  }
  
  export default RideHistoryDisplay2