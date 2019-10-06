import React, {Component} from 'react';
import classes from './BusinessList.module.css';
import addBusiness from '../../images/icons/addBusiness.png';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/businessBuilder';

import BusinessForm from '../../containers/Forms/BusinessForm/BusinessForm';
import BusinessTab from '../BusinessTab/BusinessTab';

class BusinessList extends Component {

  state={
    isBusinessFormShown: false,
  }

  showBusinessForm = () => {
    this.setState({isBusinessFormShown: !this.state.isBusinessFormShown})
  }

  render(){

  let businessForm = null;

  if(this.state.isBusinessFormShown){
    businessForm = <BusinessForm addBusiness={this.props.addBusiness}/>;
  }   

  let businessTab = this.props.business.map(
    (el)=><BusinessTab switchBusinessTab={this.props.switchBusinessTab} business={el}/>
    ) 

  return (
  	<div className={classes.businessListWrapper}>
  		<img/>
  		<h1>Time Catcher</h1>
  		<h2>Business List</h2>
      <button onClick={this.showBusinessForm} className={classes.createBusinessBtn}>
        <img className={classes.addBusinessIcon}/>
  			<span>Create Business</span>
  		</button>
      {businessForm}
	    <div>
        {businessTab}
	    </div>	
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
      addBusiness: (data) => dispatch(actions.addBusiness(data)),
      switchBusinessTab: (id) => dispatch(actions.switchBusinessTab(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
