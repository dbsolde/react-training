import React from 'react'
import logo from '../../assets/images/logo.svg'
import './header.css'

const Header = () => {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">TODO App</h1>
        </header>
    )
}

export default Header
