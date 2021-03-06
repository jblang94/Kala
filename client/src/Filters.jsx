import React, {Component} from 'react';



var Filters = React.createClass({
  getInitialState: function (){
    return {commitment: "", max_price: "", class_name: "", studio_name: "", location: "", rating: ""}
  },
  componentDidMount: function() {
    $('select').on("change", () => {this.handleChange()}).material_select();
    $('.tooltipped').tooltip({delay: 50});
  },
  handleChange(e) {
    var commitmentvalue = (this.commitments.find(function (input){
        return input.checked;
      }) || {}).value
    this.setState({
      commitment: commitmentvalue,
      max_price: commitmentvalue && this.max_price.value,
      class_name: this.class_name.value,
      studio_name: this.studio_name.value,
      location: this.location.value,
      rating: (this.ratings.find(function (input){
        return input.checked;
      }) || {}).value
    }, function (){
    }.bind(this));

  },
  handleFormSubmit (e) {
    e.preventDefault();
    $("#filter-classes")[0].reset();
    this.setState({
      commitment: "", max_price: "", class_name: "", studio_name: "", location: "", rating: ""
    })
    $("#max-price").css('visibility', 'hidden');
    this.setState({max_price: undefined});
    this.props.onFilterSubmit(this.state);
    Materialize.toast('Filtered!', 4000, 'rounded toast');
  },
  render() {
    this.commitments = [];
    this.ratings = [];
    var singleToolTip = "Filter by the drop in price.";
    var passToolTip = "Filter by the average per class price for class passes that include 5 to 25 sessions.";
    var membershipToolTip = "Filter by the average per class price for memberships based on twice per week frequency.";
    return (
      <form onSubmit={this.handleFormSubmit} id="filter-classes">
        <div className="row">
          <div className="col m6">
            <label>Choose a level of commitment:</label>
            <p>
              <a className="tooltipped" data-position="right" data-delay="50" data-customcss="yellow" data-tooltip={singleToolTip}>
                <input ref={(el) => {this.commitments[0] = el;}} name="commitment" value="single" type="radio" id="commitment1" onClick={this.handleChange}/>
                <label htmlFor="commitment1">Single</label>
              </a>
            </p>
            <p>
              <a className="tooltipped" data-position="right" data-delay="50" data-tooltip={passToolTip}>
                <input ref={(el) => {this.commitments[1] = el;}} name="commitment" value="pass" type="radio" id="commitment2" onClick={this.handleChange}/>
                <label htmlFor="commitment2">Pass</label>
              </a>
            </p>
            <p>
              <a className="tooltipped" data-position="right" data-delay="50" data-tooltip={membershipToolTip}>
                <input ref={(el) => {this.commitments[2] = el;}} name="commitment" value="membership" type="radio" id="commitment3" onClick={this.handleChange}/>
                <label htmlFor="commitment3">Membership</label>
              </a>
            </p>
          </div>
          
          <div className="col m6">
            <span id="max-price"style={{visibility: this.state.commitment ? "visible" : "hidden"}}>
              <p className="range-field">
                <label>Maximum Price</label>
                <input ref={(el) => {this.max_price = el}} type="range" id="price-slider" min="5" max="30" name="max_price" onChange={this.handleChange}/>  
              </p>
            </span>
          </div>
          <div className="input-field col m6">
            <input ref={(el) => {this.class_name = el}} name="class_name" id="class-name" type="text" className="validate" placeholder="Class Name" onChange={this.handleChange}/>
            <label htmlFor="class-name">Class Name</label>
          </div>

          <div className="input-field col m6">
            <select ref={(el) => {this.studio_name = el}} name="studio_name" form="filter-classes">
            <option value=""></option>

            { this.props.studios.map((studio) => {
               return <option key={studio.id} value={studio.name}>{studio.name}</option>
             })}
            </select>
            <label>Select Studio</label>
          </div>

          <div className="input-field col m6">
            <select ref={(el) => {this.location = el}} name="location" form="filter-classes" onChange={this.handleChange}>
              <option value=""></option>
              <option value="Downtown Vancouver">Downtown Vancouver</option>
              <option value="Kitsilano">Kitsilano</option>
              <option value="Mount Pleasant">Mount Pleasant</option>
              <option value='East Vancouver'>East Vancouver</option>
            </select>
            <label>Select Location</label>
          </div>

          <div className="col m6">
            <label>Minimum Google+ Rating</label>
              <p>
              <input ref={(el) => {this.ratings[0] = el;}} onClick={this.handleChange} name="rating" value="1" type="radio" id="rating1" />
              <label className="radio" htmlFor="rating1">1</label>

              <input ref={(el) => {this.ratings[1] = el;}} onClick={this.handleChange} name="rating" value="2" type="radio" id="rating2" />
              <label className="radio" htmlFor="rating2">2</label>

              <input ref={(el) => {this.ratings[2] = el;}} onClick={this.handleChange} name="rating" value="3" type="radio" id="rating3" />
              <label className="radio" htmlFor="rating3">3</label>

              <input ref={(el) => {this.ratings[3] = el;}} onClick={this.handleChange} name="rating" value="4" type="radio" id="rating4" />
              <label className="radio" htmlFor="rating4">4</label>
             </p>
          </div>
          
          <input id="form-btn-text" className="waves-effect waves-light btn-flat form-btn btn" type="submit" label="Filter" onclick="Materialize.toast('Filtered!', 4000, 'rounded toast')"/>
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