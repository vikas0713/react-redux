import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/Actions';
import '../App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: '',
        }
    }

    login() {
        console.log("state ", this.state);
        this.props.login(this.state.username, this.state.password);
    }

    isLoggedIn() {
        console.log("isLoggedIn method invoked");
    }

    render() {
        return (
            <div className="container outline main">
                <div className="container banner">
                    <h1 className="text-center">My Network</h1>
                </div>
                <div className="row">
                    <h3 className="text-center">Login</h3>
                    <div className="col-md-offset-4 col-md-4">
                        <input type="text" placeholder="enter your username" className="form-control input-class" onChange={event=>this.setState({username:event.target.value})}/>
                        <input type="password" placeholder="password" className="form-control input-class" onChange={event=>this.setState({password:event.target.value})}/>
                        <button type="button" className="btn btn-default center-block" onClick={()=>this.login()}>Success</button>
                    </div>

                </div>
            </div>
        )
    }
}

// Binding of react component with Redux
export default connect(null, {login})(App)





