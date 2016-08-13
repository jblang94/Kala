import React, {Component} from 'react';
import moment from 'moment';
import Day from './Day.jsx'

var Calendar = React.createClass({
  getInitialState: function () {
        return {hover: false};
    },

  mouseOver: function () {
      this.setState({hover: true});
  },

  mouseOut: function () {
      this.setState({hover: false});
  },
  splitByDay: function (allevents) {
    var splitByDayEvents = []
    allevents.forEach(function(event){
      var weekdayNumber = moment(event.start).isoWeekday();
      if (!splitByDayEvents[weekdayNumber]) {
        splitByDayEvents[weekdayNumber] = []
      };
      splitByDayEvents[weekdayNumber].push(event);
    });
    return splitByDayEvents
  },
  render: function() {
    var eventsByDay = this.splitByDay(this.props.google_events);
    var todayWeekday = moment().isoWeekday();
    var dayColumns = [];
    for (let i = 0; i <7; i++) {
      var weekdaysNumber = todayWeekday+i;
      if(weekdaysNumber > 7) {
        weekdaysNumber -= 7;
      }
      dayColumns.push((
        <div className="col">{moment.weekdays(weekdaysNumber)}
          <Day eventsByDay={eventsByDay[weekdaysNumber] || []}/>
        </div>
        ));
    }
    console.log("weekday", weekdaysNumber)
    return (
        <div className="row-7">
          {dayColumns}
      </div>
    );
  }
})
export default Calendar;
