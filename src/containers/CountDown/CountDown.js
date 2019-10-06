import React, { Component } from 'react';
import Button from "../../components/Button/Button";
import "./CountDown.css";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/businessBuilder';


class CountDown extends Component {

	state = {
  		timerOn: false,
  		timerStart: 0,
  		timerTime: 0
	} 

  constructor(props){ 
    super(props);

    // REFS:
    this.hoursRef = React.createRef();
    this.hoursInputRef = React.createRef();
    this.minutesRef = React.createRef();
    this.minutesInputRef = React.createRef();
    this.secondsRef = React.createRef();
    this.secondsInputRef = React.createRef();
  }

		startTimer = () => {
  			this.setState({
    			timerOn: true,
    			timerStart: this.props.business[this.props.businessData.id].timerTimeCountDown
  			});

	  		this.timer = setInterval(() => {
	    		const newTime = this.props.business[this.props.businessData.id].timerTimeCountDown - 10;
	    			if (newTime >= 0) {
              this.props.saveCurrentCountDownTime(null, this.props.businessData.id, newTime)
              this.setState({timerTime: newTime})
	    			} else {
	      				clearInterval(this.timer);
	      				this.setState({ timerOn: false });
	      				alert("Countdown ended");
			    }

    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    this.props.saveCurrentCountDownTime({seconds, minutes, hours}, this.props.businessData.id, timerTime)

			}, 10);
		}

		stopTimer = () => {
  			clearInterval(this.timer);
  			this.setState({ timerOn: false });
		}

		resetTimer = () => {
  			if (this.state.timerOn === false) {
    			this.setState({
     				timerTime: this.state.timerStart
   			 	});
          this.props.clearCurrentCountDownTime(this.props.businessData.id);
  			}
		}

    showTimeInput = (whatToChange) => {

      if(this.state.timerOn){
        return false;
      }

      switch(whatToChange){
        case 'hours':
        this.hoursRef.current.style.display='none'
        this.hoursInputRef.current.style.display='inline-block';
        break;

        case 'minutes':
        this.minutesRef.current.style.display='none';
        this.minutesInputRef.current.style.display='inline-block';
        break;

        case 'seconds':
        this.secondsRef.current.style.display='none';
        this.secondsInputRef.current.style.display='inline-block';
        break;
      }
    }

		adjustTimer = input => {
  			const { timerOn } = this.state;
        const timerTime = this.props.business[this.props.businessData.id].timerTimeCountDown
  			const max = 216000000;
  			if (!timerOn) {
  			  if (input === "incHours" && timerTime + 3600000 < max) {
            this.props.saveCurrentCountDownTime(null, this.props.businessData.id, timerTime+3600000)
            this.setState({ timerTime: timerTime + 3600000 });
  			  } else if (input === "decHours" && timerTime - 3600000 >= 0) {
            this.props.saveCurrentCountDownTime(null, this.props.businessData.id, timerTime-3600000)
  			    this.setState({ timerTime: timerTime - 3600000 });
  			  } else if (input === "incMinutes" && timerTime + 60000 < max) {
            this.props.saveCurrentCountDownTime(null, this.props.businessData.id, timerTime+60000)
  			    this.setState({ timerTime: timerTime + 60000 });
  			  } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
            this.props.saveCurrentCountDownTime(null, this.props.businessData.id, timerTime-60000)
  			    this.setState({ timerTime: timerTime - 60000 });
  			  } else if (input === "incSeconds" && timerTime + 1000 < max) {
            this.props.saveCurrentCountDownTime(null, this.props.businessData.id, timerTime+1000)
  			    this.setState({ timerTime: timerTime + 1000 });
  			  } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
            this.props.saveCurrentCountDownTime(null, this.props.businessData.id, timerTime-1000)
  			    this.setState({ timerTime: timerTime - 1000 });
  			  }
  			}
		};

		render() {
    const { timerTime, timerStart, timerOn } = this.state;

    let seconds = ("0" + (Math.floor((this.props.business[this.props.businessData.id].timerTimeCountDown / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((this.props.business[this.props.businessData.id].timerTimeCountDown / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((this.props.business[this.props.businessData.id].timerTimeCountDown / 3600000) % 60)).slice(-2);

    let countdown = null;

    if(this.props.isShown){
    countdown = 
      <div className="Countdown">
        <div className="Countdown-header">Countdown</div>
        <div className="Countdown-display">
          <Button clicked={() => this.adjustTimer("incHours")}>&#8679;</Button>
          <Button clicked={() => this.adjustTimer("incMinutes")}>
            &#8679;
          </Button>
          <Button clicked={() => this.adjustTimer("incSeconds")}>
            &#8679;
          </Button>

          <div className="Countdown-time">
            <input ref={this.hoursInputRef} className='inputTimeStyle'/>
            <span ref={this.hoursRef} onClick={()=>this.showTimeInput('hours')}>{hours}</span>
            <span> : &nbsp;</span>
            <input ref={this.minutesInputRef} className='inputTimeStyle'/>
            <span ref={this.minutesRef} onClick={()=>this.showTimeInput('minutes')}>{minutes}
            </span>
            <span> : &nbsp;</span>
            <input ref={this.secondsInputRef} className='inputTimeStyle'/>
            <span ref={this.secondsRef} onClick={()=>this.showTimeInput('seconds')}>{seconds}</span>
          </div>

          <Button clicked={() => this.adjustTimer("decHours")}>&#8681;</Button>
          <Button clicked={() => this.adjustTimer("decMinutes")}>
            &#8681;
          </Button>
          <Button clicked={() => this.adjustTimer("decSeconds")}>
            &#8681;
          </Button>
        <div className="Countdown-label">
          <span className="Countdown-label_hours">Hours</span>
          <span className="Countdown-label_minutes">Minutes</span>
          <span className="Countdown-label_seconds">Seconds</span>
        </div>
        </div>

        {timerOn === false && (
          <Button className="Button-start" clicked={this.startTimer}>
            Start
          </Button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <Button className="Button-stop" clicked={this.stopTimer}>
            Stop
          </Button>
        )}

            <Button className="Button-reset" clicked={this.resetTimer}>
              Reset
            </Button>

      </div>      
    }

    return (
      <div>
        {countdown}
      </div>
    );
  }

}

  const mapStateToProps = state => {
    return {
      business: state.businessList.business,
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      saveCurrentCountDownTime: (time, id, timerTimeCountDown) => dispatch(actions.saveCurrentCountDownTime(time, id, timerTimeCountDown)),
      clearCurrentCountDownTime: (id) => dispatch(actions.clearCurrentCountDownTime(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CountDown);