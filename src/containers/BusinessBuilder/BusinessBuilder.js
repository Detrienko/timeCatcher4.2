import React, { Component } from 'react';

import classes from './BusinessBuilder.module.css'

import Stopwatch from '../Stopwatch/Stopwatch';
import CountDown from '../CountDown/CountDown';
import Button from '../../components/Button/Button';
import Statistics from '../../components/Statistics/Statistics';

import { connect } from 'react-redux';

class BusinessBuilder extends Component {

	state = {
		countDownIsShown: false,
		stopwatchIsShown: true,
	}

	switchTimer = () => {
		this.setState({
			countDownIsShown: !this.state.countDownIsShown,
			stopwatchIsShown: !this.state.stopwatchIsShown,	
		})
	}


	render(){

		let businessData = this.props.business[this.props.business.findIndex((el)=>el.id==this.props.currentBussinessId)]

		return(
			<div className={classes.mainDisplayWrapper}>
				<h2>{businessData.title}</h2>
				<p>{businessData.hours}/{businessData.goalHours} hours</p>

				<div className={classes.timers}>
					<div className={classes.timerWrapper}>
						<Stopwatch businessData={businessData} isShown={this.state.stopwatchIsShown}/>
						<CountDown businessData={businessData} isShown={this.state.countDownIsShown}/>
					</div>
					<div className={classes.switchBtnWrapper}>
						<button onClick={this.switchTimer} className={classes.switchBtn}>SWITCH</button>
					</div>	
				</div>
				<br/><br/><br/>
				<Button>ADD HOURS</Button>
				<p>|</p>
				<p>|</p>
				<p>|</p>
				<p>w</p>
				<Statistics/>
			</div>
			)
	}
}

  const mapStateToProps = state => {
    return {
      business: state.businessList.business,
    }
  }

export default connect(mapStateToProps)(BusinessBuilder);