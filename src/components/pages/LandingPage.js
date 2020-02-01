import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './LandingPageStyle.css';

export class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <h1 id="phi">&Phi;</h1>
        <div id="tagline">
			     Because rock climbing needs more people arguing about subjective grades
		    </div>
        <button><Link to="/signup">Register New User</Link></button>
        <button><Link to="/login">Authenticate Existing User</Link></button>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(LandingPage);
