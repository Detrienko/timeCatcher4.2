import React from 'react';
import classes from './Layout.module.css';

function Layout(props) {
  return (
  	<div>
	    <div className={classes.layoutWrapper}>
	    	<ul className={classes.topMenu}>
	    	<li className={classes.logIn}><a href="#">LogIn</a></li>
	    	<li className={classes.signUp}><a href="#">SignUp</a></li>
	    	</ul>
	    </div>
    	{props.children}
    </div>	
  );
}

export default Layout;
