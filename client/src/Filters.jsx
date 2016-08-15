import React, {Component} from 'react';



var Filters = React.createClass({

  componentDidMount: function() {
    $(document).ready(function() {
        $('select').material_select();
    });
  },

  render() {
    return (
      <form action="//localhost:3001/classes_outside_busy_time" id="filter-classes">
        <div className="row">
          <div className="col s6">
            <label>Choose a level of commitment:</label>
            <p>
              <input name="commitment" value="single" type="radio" id="commitment1" />
              <label htmlFor="commitment1">Single</label>
            </p>
            <p>
              <input name="commitment" value="pass" type="radio" id="commitment2" />
              <label htmlFor="commitment2">Pass</label>
            </p>
            <p>
              <input name="commitment" value="membership" type="radio" id="commitment3" />
              <label htmlFor="commitment3">Membership</label>
            </p>
          </div>

          <div className="col s6">
            <p className="range-field">
            <label>Maximum Price</label>
              <input type="range" id="price-slider" min="0" max="50" name="max_price"/>
            </p>
          </div>

          <div className="input-field col s6">
            <input name="class_name" id="class-name" type="text" className="validate" placeholder="Class Name"/>
            <label htmlFor="class-name">Class Name</label>
          </div>

          <div className="input-field col s6">
            <select name="studio_name" form="filter-classes">
            <option value=""></option>
            { this.props.studios.map(function(studio) {
               return <option key={studio.id} value={studio.name}>{studio.name}</option>
             })}
            </select>
            <label>Select Studio</label>
          </div>

          <div className="input-field col s6">
            <select name="location" form="filter-classes">
              <option value=""></option>
              <option value="Downtown Vancouver">Downtown Vancouver</option>
              <option value="Kitsilano">Kitsilano</option>
              <option value="Mount Pleasant">Mount Pleasant</option>
              <option value='East Vancouver'>East Vancouver</option>
            </select>
            <label>Select Location</label>
          </div>

          <div className="col s6">
            <label>Minimum Rating</label>
              <p>
              <input name="rating" value="1" type="radio" id="rating1" />
              <label className="radio" htmlFor="rating1">1</label>

              <input name="rating" value="2" type="radio" id="rating2" />
              <label className="radio" htmlFor="rating2">2</label>

              <input name="rating" value="3" type="radio" id="rating3" />
              <label className="radio" htmlFor="rating3">3</label>

              <input name="rating" value="4" type="radio" id="rating4" />
              <label className="radio" htmlFor="rating4">4</label>

              <input name="rating" value="5" type="radio" id="rating5" />
              <label className="radio" htmlFor="rating5">5</label>
             </p>
          </div>
          
          <input id="form-btn-text" className="waves-effect waves-light btn-flat form-btn" type="submit" label="Filter"/>
        </div>
     </form>
    );
    // Click event handler on the button that does ajax request for classes: "http://localhost:3001/classes_outside_busy_time" And changes parent state (App) state: classes with the new data.
  }
})
export default Filters;

// { this.props.studios.map(function(studio) {
//                 return <Marker key={studio.id} studio={studio}
//                 position={{ lat: studio.lat, lng: studio.lng }}
//                 studioid={{ studioid: studio.id }} />
//               })}