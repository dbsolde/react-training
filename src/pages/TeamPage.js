import React from 'react'
import { Link } from 'react-router-dom'
import {
	StyledLists,
	StyledLi
} from '../styled/common'

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
  
const TeamPage = () => {
	return(
		<div>
			<h1>Our Team</h1>
			<StyledLists>
				{data && data.map( (item) => 
					<StyledLi key={item.id} style={{position: 'relative'}}>
						{item.name}
						<Link to={`/our-team/${item.id}`} style={{position:'absolute',right:0}}>View</Link>
					</StyledLi>
				)}
			</StyledLists>
		</div>
	)
}

export default TeamPage