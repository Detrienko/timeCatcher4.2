import React from 'react';
import classes from './BusinessTab.module.css';

const BusinessTab = (props) => {

	const switchBusinessTab = () => {
		let currentId = props.business.id;
		props.switchBusinessTab(currentId);
	}


	return(
		<div onClick={switchBusinessTab} className={classes.businessTab}>

			<span><a>{props.business.title}</a></span><br/>
			<span>{props.business.progress}%</span><br/>
			<span>Goal: {props.business.hours}/{props.business.goalHours} hours</span><br/>
		</div>
		)
}

export default BusinessTab;