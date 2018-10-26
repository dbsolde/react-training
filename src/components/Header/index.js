import React from 'react'
import logo from '../../assets/images/logo.svg'
import {
    AppLogo,
    HeaderWrapper,
    AppTitle
} from '../../styled/header'

const Header = () => {
    return(
        <HeaderWrapper>
            <AppLogo src={logo} className="App-logo" alt="logo" />
            <AppTitle>TODO App</AppTitle>
        </HeaderWrapper>
    )
}

export default Header
