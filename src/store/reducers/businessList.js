import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';


const initialState = {
	business: [
		{	
			id: 0,
			title: 'English',
			hours: 266,
			goalHours: 15000,
			description: 'Read something',
			progress: 0,
			isShown: true,
			currentStopwatchTime: {
				hours: '00',
				minutes: '00',
				seconds: '00',
				centiseconds: '00'
			},
			currentCountdownTime: {
        		hours: '00',
        		minutes: '00',
        		seconds: '00',
     		},
      		timerTime: '',
      		timerTimeCountDown: 0
		},
		{
			id: 1,
			title: 'Programming',
			goalHours: 15000,
			hours: 23,
			description: 'PROGRAMMING!!!!',
			progress: 0,
			isShown: false,
			currentStopwatchTime: {
				hours: '00',
				minutes: '00',
				seconds: '00',
				centiseconds: '00'
			},
			currentCountdownTime: {
        		hours: '00',
        		minutes: '00',
        		seconds: '00'
     		},
      		timerTime: '',
      		timerTimeCountDown: 0
      	}
	]	
}

const reducer = (state=initialState, action) => {

	switch(action.type){
		case actionTypes.ADD_BUSINESS:
			let oldBusiness = state.business;
			let newBusiness = [...oldBusiness, action.data];
			let newState = {
				business: newBusiness
			} 
			return newState;

		case actionTypes.SWITCH_BUSINESS_TAB:
			let oldBusiness2 = state.business;
			let index = oldBusiness2.findIndex((el)=>el.id==action.id);
			let newBusiness2 = [...oldBusiness2];
			newBusiness2.forEach((item)=>{
				item.isShown = false;
			})
			newBusiness2[index].isShown = true;
			let newState2 = {
				business: newBusiness2
			}
			return newState2;

		case actionTypes.SAVE_CURRENT_STOPWATCH_TIME:
			let oldBusiness3 = state.business;
			let index3 = oldBusiness3.findIndex((el)=>el.id==action.id);
			let newBusiness3 = [...oldBusiness3];
			newBusiness3[index3].currentStopwatchTime = {...action.time};
			newBusiness3[index3].timerTime = action.timerTime;
			let newState3 = {
				business: newBusiness3
			}
			return newState3;

		case actionTypes.CLEAR_CURRENT_STOPWATCH_TIME:
			let oldBusiness4 = state.business;
			console.log(action.id)
			let index4 = oldBusiness4.findIndex((el)=>el.id==action.id);
			let newBusiness4 = [...oldBusiness4];
			console.log(newBusiness4[index4])
			newBusiness4[index4].currentStopwatchTime = {
				hours: '00',
				minutes: '00',
				seconds: '00',
				centiseconds: '00'
			}
			newBusiness4[index4].timerTime = 0;
			let newState4 = {
				business: newBusiness4
			}
			return newState4;

		case actionTypes.SAVE_CURRENT_COUNTDOWN_TIME:
			let oldBusiness5 = state.business;
			let index5 = oldBusiness5.findIndex((el)=>el.id==action.id);
			let newBusiness5 = [...oldBusiness5];
			if(!action.time==null){
				newBusiness5[index5].currentCountdownTime = {...action.time};
			}
			else if(action.time==null){
				newBusiness5[index5].currentCountdownTime = {
					seconds: ("0" + (Math.floor((action.timerTimeCountDown / 1000) % 60) % 60)).slice(-2),
    				minutes: ("0" + Math.floor((action.timerTimeCountDown / 60000) % 60)).slice(-2),
    				hours: ("0" + Math.floor((action.timerTimeCountDown / 3600000) % 60)).slice(-2),
    			}
			}
			newBusiness5[index5].timerTimeCountDown = action.timerTimeCountDown;
			let newState5 = {
				business: newBusiness5
			}
			return newState5;

			case actionTypes.CLEAR_CURRENT_COUNTDOWN_TIME:
			let oldBusiness6 = state.business;
			let index6 = oldBusiness6.findIndex((el)=>el.id==action.id);
			let newBusiness6 = [...oldBusiness6];
			newBusiness6[index6].currentCountdownTime = {
				hours: '00',
				minutes: '00',
				seconds: '00'
			}
			newBusiness6[index6].timerTimeCountDown = 0;
			let newState6 = {
				business: newBusiness6
			}
			return newState6;
			
		default:
		return state; 
	}
}

export default reducer;