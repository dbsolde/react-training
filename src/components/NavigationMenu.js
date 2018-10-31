import React from 'react';
import { Link } from 'react-router-dom'
import { Topnav } from '../styled/nav'
import styled from 'styled-components'

/*
	The styled method works perfectly on all of your own or any third-party components, 
	as long as they attach the passed className prop to a DOM element.

	You can also pass tag names into the styled() factory call, like so: styled("div"). 
	In fact, the styled.tagname helpers are just aliases that do the same.
	"https://www.styled-components.com/docs/basics"
*/
const StyledLink = styled(Link)`
	width: 100px;
	display: inline-block;
	background: green;
	color: white;
	text-decoration: none;
	padding: 10px 0;
	:hover {
		color: black;
		background: white;
	}
`

const NavigationMenu = () => (
	<Topnav>
		<StyledLink to="/">Home</StyledLink>
		<StyledLink to="/our-team">Our Team</StyledLink>
		<StyledLink to="/about">About</StyledLink>
		<StyledLink to="/contact-us">Contact</StyledLink>
	</Topnav>
)

export default NavigationMenu