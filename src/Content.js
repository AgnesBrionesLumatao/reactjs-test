import React, { Component } from 'react';

export default class Content extends Component {
  render() {
  	return(
  	  <div className="content">
  	  	<div className="line"></div>

  	  	<div className="item">
  	  	  <div className="avatar">
  	  	  	<img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
  	  	  	  doug
  	  	  </div>

  	  	  <span className="time">
  	  	    An hour ago
  	  	  </span>
  	  	  <p>Ate lunch</p>
  	  	  <div className="commentCount">
  	  	    2
  	  	  </div>
  	  	</div>
  	  </div>
  	)
  }
}
