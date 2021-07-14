import React from 'react';
import timeIcon from 'images/durationIcon.png'
import speedIcon from 'images/speedIcon.png'
import deleteIcon from 'images/deleteIcon.png'
import distanceIcon from 'images/distanceIcon.png'

const formatDuration  = function (seconds : number){
  let result: string = ''
  let hours: number = (seconds / 3600)
  let rhours: number = Math.floor(hours)
  let minutes: number = (hours - rhours) * 60
  let rminutes: number = Math.round(minutes)
  let rseconds : number = Math.round(seconds % 60);
  if (seconds > 3600) {
      result += `${rhours} h ${rminutes} min ${rseconds} s`
  } else if (3600 > seconds && seconds > 60) {
      result += `${rminutes} min ${rseconds} s`
  } else {
      result += `${rseconds} s`
  }
  return result
} 

const DisplayRide = ({
  id,
    title,
    startTime,
    finishTime,
    date,
    speed,
    duration,
    distance,
    handleDeleteRide,
  }: any) => {
    return (
        <li key = {id} >
          <table>
            <thead>
              <tr>
                <th>{title}</th>
                <th></th><th></th>
                <th><button onClick={handleDeleteRide} className="edit-ride"><img src={deleteIcon} alt="delete icon" /></button></th>
              </tr>
            </thead>
            <tbody className="tblData">
              <tr>
                <td>{date}</td>
                <td>{startTime}</td>
                <td>{finishTime}</td>
              </tr>
              <tr>
                <td>
                  <img className="durationIcon" src={timeIcon} alt="time icon" />
                  {formatDuration(duration)}
                </td>
                <td>
                  <img className="bikeIcon" src={distanceIcon} alt="distance icon" />
                  {distance} km
                </td>
                <td>
                  <img className="durationIcon" src={speedIcon} alt="speed icon" />
                  {speed} km/h
                </td>
              </tr>
            </tbody>
          </table>
        </li>
    );
  };

export default DisplayRide