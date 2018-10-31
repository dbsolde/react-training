import React from 'react'
import { Route, Switch } from 'react-router-dom'
/*
	* BrowserRouter
	- should be used when you have a server that will handle dynamic requests
	* HashRouter
	- should be used for static websites
	"Usually it is preferable to use a <BrowserRouter>, 
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

export default () => (
	<div>
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route exact path="/our-team" component={TeamPage} />
				<Route path="/our-team/:id" component={TeamSingle} />
			<Route path="/about" component={AboutPage} />
			<Route path="/contact-us" component={ContactPage} />
		</Switch>
	</div>
)