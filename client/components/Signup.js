import React from 'react'
import {} from '../styles/signup.scss'


class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword: ''       
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmailChange (e) {
        this.setState({ 
            email: e.target.value 
        })
    }

    handlePasswordChange(e) {
        this.setState({ 
            password: e.target.value 
        })
    }

    handleConfirmPasswordChange(e) {
        this.setState({ 
            confirmPassword: e.target.value 
        })
    }

    handleSubmit(e){
        e.preventDefault()

        $.ajax({
            url: 'signup',
            method: 'post',
            data: JSON.stringify(this.state),
            success: function(data) {console.log('success', data)},
            error: function(error) { console.log('error', error)}
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row"> 
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <h1>Signup form</h1>
                            <div className="col-lg-6">
                                <div className="well well-sm"><strong><span className="fa fa-asterisk"></span>Required Field</strong></div>
                                <div className="form-group">
                                    <label htmlFor="InputEmail">Enter Email</label>
                                    <div className="input-group">
                                        <input type="email" 
                                            className="form-control" 
                                            value={this.state.email}
                                            onChange={this.handleEmailChange} 
                                            name="InputEmail" id="InputEmail" 
                                            placeholder="Enter Email" required />
                                        <span className="input-group-addon"><span className="fa fa-asterisk"></span></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputPassword">Enter Password</label>
                                    <div className="input-group">
                                        <input type="password" 
                                            className="form-control" 
                                            onChange={this.handlePasswordChange} 
                                            name="InputPassword" id="InputPassword" 
                                            placeholder="Enter Password" required />
                                        <span className="input-group-addon"><span className="fa fa-asterisk"></span></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                                    <div className="input-group">
                                        <input type="password" 
                                            className="form-control" 
                                            onChange={this.handleConfirmPasswordChange} 
                                            name="ConfirmEmail" id="ConfirmEmail" 
                                            placeholder="Confirm Password" required />
                                        <span className="input-group-addon"><span className="fa fa-asterisk"></span></span>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-large btn-primary" value="Submit"/>
                        </form>
                        <div className="col-lg-5 col-md-push-1">
                            <div className="col-md-12">
                                <div className="alert alert-success">
                                    <strong><span className="fa fa-check"></span> Success! Message sent.</strong>
                                </div>
                                <div className="alert alert-danger">
                                    <span className="fa fa-remove"></span><strong> Error! Please check all page inputs.</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup