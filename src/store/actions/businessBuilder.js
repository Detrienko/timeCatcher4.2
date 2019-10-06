import * as actionTypes from './actionsTypes';

export const addBusiness = (data) => {
	return {
		type: actionTypes.ADD_BUSINESS,
		data: data
	}
}

export const switchBusinessTab = (id) => {
	return{
		type: actionTypes.SWITCH_BUSINESS_TAB,
		id: id	
	}
}

export const saveCurrentStopwatchTime = (time, id, timerTime) => {
	return{
		type: actionTypes.SAVE_CURRENT_STOPWATCH_TIME,
		time: time,
		id: id,
		timerTime: timerTime
	}
}

export const clearCurrentStopwatchTime = (id) => {
	return{
		type: actionTypes.CLEAR_CURRENT_STOPWATCH_TIME,
		id: id	
	}
}

export const saveCurrentCountDownTime = (time, id, timerTimeCountDown) => {
	return{
		type: actionTypes.SAVE_CURRENT_COUNTDOWN_TIME,
		time: time,
		id: id,
		timerTimeCountDown: timerTimeCountDown
	}
}

export const clearCurrentCountDownTime = (id) => {
	return{
		type: actionTypes.CLEAR_CURRENT_COUNTDOWN_TIME,
		id: id,
	}
}

