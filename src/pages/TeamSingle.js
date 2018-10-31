import React from 'react'
import { Link } from 'react-router-dom'

const TeamSingle = (props) => {
	return (
		<div>
			<h1>Player name: <small>Test</small></h1>
			{props.match.params.id}
		</div>
	)
}

export default TeamSingle