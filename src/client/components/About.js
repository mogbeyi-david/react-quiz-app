import React from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'

import reactLogo from '../data/react.png'
import reduxLogo from '../data/redux.png'

@connect(
	state => ({
		isAuthenticated: state.auth.isAuthenticated,
		user: state.auth.user
	})
)
class About extends React.Component {
	static propTypes = {
		isAuthenticated: React.PropTypes.bool.isRequired
	}
 	render() {
 		return (
		  <div className = 'aboutWrapper'>

				{ this.props.isAuthenticated ? 
		    <h1>Welcome to the React Quiz App {this.props.user}!</h1> :
		    <h1>Welcome to the React Quiz App!</h1> }

		    { !this.props.isAuthenticated && 
					<div className = 'description'>
						<p>You can go ahead and <Link to = 'quiz'>take the Quiz</Link> to test your knowledge of React, or login with GitHub to create your own quizzes.</p>
					</div> }

				{ this.props.isAuthenticated &&
					<div className = 'description'>
						<p>This app will help you learn React and Redux, awesome new cutting edge web technologies! Feel free to go ahead and <Link to = 'quiz'>take the Quiz</Link> to test your React skills, or you can just use this app to <Link to = 'create'>create your own quizzes</Link> on any topic!</p>
					</div> }

					<div className = 'logos'>
						<img src = {reactLogo} alt = "React Logo"/>
						<img src = {reduxLogo} alt = "Redux Logo"/>
					</div>

		  </div>
	  );
 	}
}
export default About;
