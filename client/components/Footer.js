import React from 'react'
import {} from '../styles/footer.scss'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container footer-container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h3> Votepal </h3>
                            <p>© 2016 Joe Grundman</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer