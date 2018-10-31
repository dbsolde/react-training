import React from 'react'
import { Link } from 'react-router-dom'

const data = [
	{
	  "id": 1,
	  "name": "Jeff B"
	},
	{
	  "id": 2,
	  "name": "Jeff C"
	},
	{
	  "id": 3,
	  "name": "Jeff A"
	},
]

const TeamSingle = (props) => {
	
	return (
		<div>
			<h1>Single Team Page</h1>
			{data.filter ( item => {
				return item.id == props.match.params.id
			})
			.map( item => 
				<p>{item.name}</p>
			)}
		</div>
	)
}

export default TeamSingle