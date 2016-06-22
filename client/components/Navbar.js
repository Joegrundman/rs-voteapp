import React from 'react'

import {} from '../styles/navbar.scss'

class Navbar extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">VotePal</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Signup</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar