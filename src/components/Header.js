import React from 'react';
import NavigationMenu from './NavigationMenu'
import logo from '../assets/images/logo.svg';
import { 
	AppLogo,
	HeaderWrapper,
	AppTitle
} from '../styled/header'

const Header = () => {
	return (
		<HeaderWrapper>
			<AppLogo src={logo} alt="logo" />
			<AppTitle className="App-title">Welcome to React</AppTitle>
			<NavigationMenu />
		</HeaderWrapper>
	)
}

export default Header