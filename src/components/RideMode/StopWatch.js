import * as React from 'react';
const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)
  

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      secondsElapsed: 0, 
      laps: [],
      lastClearedIncrementer: null
    };
    this.incrementer = null;
    this.handleStartClick = this.handleStartClick.bind(this)
    this.handleStopClick = this.handleStopClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
  }  
  //automatically start the timer
  componentDidMount(){
    this.handleStartClick()
  }
  componentWillUnmount(){
    this.handleStopClick()
    this.handleResetClick() 
  }

  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
  }
  
  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }
  
  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  }
  render() {
    return (
      <div className="stopwatch">
        <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
        <h3>Duration</h3>
        <ul className="stopwatch-laps">
          { this.state.laps.map((lap, i) =>
              <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(lap)}</li>)
          }
        </ul>
      </div>
    );
  }
}