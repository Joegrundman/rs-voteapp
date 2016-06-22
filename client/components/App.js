import React from 'react'
import Navbar from 'components/Navbar'
import Signup from 'components/Signup'
import Footer from 'components/Footer'
import {} from '../styles/app.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Signup />
                <Footer />
            </div>
        )
    }
}

export default App