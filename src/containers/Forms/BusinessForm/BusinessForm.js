import React, { Component } from 'react';
import Button from "../../../components/Button/Button";
import { connect } from 'react-redux';

class BusinessForm extends Component {

  state = {
    title: '',
    goalHours: ''
  }

  titleHandler = (e) => {
    this.setState({title: e.target.value})
  }

  hoursHandler = (e) =>{
    this.setState({goalHours: e.target.value})
  }

  addBusiness = () => {
    let data = {
      id: this.props.business.length,
      title: this.state.title,
      goalHours: this.state.goalHours,
      hours: 0,
      description: '',
      progress: 0,
      currentStopwatchTime: {
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      currentCountdownTime: {
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      timerTime: 0,
      timerTimeCountDown: 0,
    }
    this.props.addBusiness(data);
    this.setState({title: '', goalHours: ''});
}




  render(){
    return(
      <div>
        <input onChange={(e)=>this.titleHandler(e)} type="text" placeholder="Title" value={this.state.title}/><br/>
        <input onChange={(e)=>this.hoursHandler(e)} type="number" placeholder="Your goal (in hours)" value={this.state.goalHours}/><br/>
        <Button clicked={this.addBusiness}>asd</Button>
      </div>
      )
  }

}

  const mapStateToProps = state => {
    return {
      business: state.businessList.business,
    }
  }

export default connect(mapStateToProps)(BusinessForm);