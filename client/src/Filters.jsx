import React, {Component} from 'react';
import {Input, Icon, Row, Col} from 'react-materialize';

var Filters = React.createClass({
  getInitialState() {
    return {Commitment: ''}
  },
  handleChange(e) {
    this.setState({Commitment: e.target.value}, function (){
      console.log(this.state)
    })
  },
  render() {
    return (
      <Row>
        <Row>
          <p>Commitment level</p>
          <Input name='Commitment' type='radio' value='Single' label='Single' onClick={this.handleChange}/>
          <Input name='Commitment' type='radio' value='Pass' label='Pass' onClick={this.handleChange}/>
          <Input name='Commitment' type='radio' value='Membership' label='Membership' onClick={this.handleChange}/>
        </Row>
        <Row>
          { this.state.Commitment &&
            <Input s={6} type="number" label="Maximum price per class" />
            }
        </Row>
        <Row>
          <p>Google+ rating higher than</p>
          <Input name='Commitment' type='radio' value='1' label='1' />
          <Input name='Commitment' type='radio' value='2' label='2' />
          <Input name='Commitment' type='radio' value='3' label='3' />
          <Input name='Commitment' type='radio' value='4' label='4' />
        </Row>
        <Row>
          <Input s={6} label="Type of class" />
        </Row>
        <Input s={12} type='select' label="Studios">
          <option value='1'>Option 1</option>
          <option value='2'>Option 2</option>
          <option value='3'>Option 3</option>
        </Input>
        <Input s={12} type='select' label="Location">
          <option value='Downtown'>Downtown Vancouver</option>
          <option value='Kitsilano'>Kitsilano</option>
          <option value='Mount Pleasant'>Mount Pleasant</option>
          <option value='East Vancouver'>East Vancouver</option>
        </Input>
      </Row>

    );
    // Could hardcode or get from data
  }
})
export default Filters;