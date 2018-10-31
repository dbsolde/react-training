import styled, { keyframes } from 'styled-components'

// Remember: always put constant at the top for styled components
const rotate = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`

export const AppLogo = styled.img`
	animation: ${rotate} infinite 20s linear;
	height: 80px;
`
export const HeaderWrapper = styled.header`
	background-color: #222;
	color: white;
`
export const AppTitle = styled.h1`
	font-size: 1.5em;
`
