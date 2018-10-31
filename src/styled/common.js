import styled from 'styled-components'

export const AppWrapper = styled.div`
	text-align: center;
	max-width: 600px;
	margin: 40px auto 0;
`

export const AppHeader = styled.header`
	background-color: #222;
	padding: 20px;
	color: white;
`

export const Form = styled.form`
	margin: 10px auto 0;
	width: 400px;
	border: 1px solid #eee;
	padding: 5px 0 15px;
`
export const AppIntro = styled.p`
	font-size: large;
`
export const FormP = styled.p`
	text-align: left;
	padding-left: 10px;
`

export const Task = styled.div`
	margin: 10px auto 0;
	width: 400px;
	text-align: left;
`
  
export const Paragraph = styled.p`
	margin: 0;
	padding: 0;
	font-size: 1em;
`
  
export const Span = styled.span`
	font-size: 1.1em;
	font-weight: bold;
`

export const StyledButton = styled.button`
	padding: 10px;
	width: 30%;
	display: inline-block;
	background: transparent;
	border: 1px solid #c0c0c0;
	:hover {
		background: #000;
		cursor: pointer;
		color: #fff;
	}
`

export const StyledLists = styled.ul`
    width: 400px;
	margin: 30px auto;
	padding: 0;
`

export const StyledLi = styled.li`
	list-style: none;
	margin: 0;
	padding: 10px 0;
	border-bottom: 1px solid #c0c0c0;
	text-align: left;
	padding-left: 10px;
`
export const StyledLiSpan = styled.span`
	font-size: 13px;
	text-align: right;
	display: block;
	float: right;
	padding-right: 10px;
	:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`
