import React, {Component} from 'react';
import Filters from './Filters.jsx';
import SimpleMap from './Map.jsx';
import Calendar from './Calendar.jsx';
import Navbar from './Navbar.jsx';


var App = React.createClass({
  getInitialState: function () {
      return {studios: [], classes: [], google_events: [], profile: []}
    },

  componentDidMount() {
    console.log("componentDidMount App");
    $.get("http://localhost:3001/studios")
    .done(function(data) {
      this.setState({studios: data})
    }.bind(this)); 
    $.get("http://localhost:3001/get_user_events")
    .done(function(data) {
      this.setState({google_events: data})
    }.bind(this));
    $.get("http://localhost:3001/classes_outside_busy_time")
    .done(function(data) {
      this.setState({classes: data})
    }.bind(this));
    $.get("http://localhost:3001/current_user/info")
    .done(function(data) {
      this.setState({profile: data})
    }.bind(this));
  },
  onFilterSubmit: function (filters){
    $.get("http://localhost:3001/classes_outside_busy_time", filters).done(function(data) {
      this.setState({classes: data})
      $('html, body').animate({
       scrollTop: $("#calendar").offset().top - $('#navbar').height()
      }, 500);
    }.bind(this));
  },
  onAddClass: function () {
    $.get("http://localhost:3001/classes_outside_busy_time")
    .done(function(data) {
      this.setState({classes: data})
    }.bind(this));
    $.get("http://localhost:3001/get_user_events")
    .done(function(data) {
      this.setState({google_events: data})
    }.bind(this));
  },
  // isn't getting the updated google_events, perhaps need to set a time out?

  render() {
    return (
      <div>
        <div id="filters">
          {this.state.studios.length > 0 &&
          <Filters studios={this.state.studios} onFilterSubmit={this.onFilterSubmit}/>
          }
        </div>
        <div id="map">
          <SimpleMap studios={this.state.studios}/>
        </div>
        <div name="calendar" id="calendar">
          <Calendar google_events={this.state.google_events} classes={this.state.classes} onAddClass={this.onAddClass}/>
        </div>
        <div id="navbar">
          <Navbar profile={this.state.profile}/>
        </div>
      </div>
    );
  }
})
export default App;