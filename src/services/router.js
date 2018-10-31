import React from 'react'
import { Route, Switch } from 'react-router-dom'
/*
	but if your website will be hosted on a server that only serves static files, then the <HashRouter> is a good solution."
	* Switch
	- Switch will iterate over its children elements (the routes) and only render the first one that matches the current pathname.
	* History
	- Each router creates a history object, 
	which it uses to keep track of the current location[1] and re-render the website whenever that changes. 
*/
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import TeamPage from '../pages/TeamPage'
import TeamSingle from '../pages/TeamSingle'

const NoMatch = ({ location }) => (
	<div>
		<h1>404 Page</h1>
		<h3>No match for <code>{location.pathname}</code></h3>
	</div>
)

export default () => (
	<div>
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route exact path="/our-team" component={TeamPage} />
				<Route path="/our-team/:id" component={TeamSingle} />
			<Route path="/about" component={AboutPage} />
			<Route path="/contact-us" component={ContactPage} />
			<Route component={NoMatch} />
		</Switch>
	</div>
)