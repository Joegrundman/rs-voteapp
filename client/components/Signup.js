import React from 'react'
import {} from '../styles/signup.scss'

class Signup extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row"> 
                    <div>
                        <form>
                            <h1>Signup form</h1>
                            <div className="col-lg-6">
                                <div className="well well-sm"><strong><span className="fa fa-asterisk"></span>Required Field</strong></div>
                                <div className="form-group">
                                    <label htmlFor="InputName">Enter Name</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" name="InputName" id="InputName" placeholder="Enter Name" required />
                                        <span className="input-group-addon"><span className="fa fa-asterisk"></span></span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup