import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import {login_request} from '../api';
import {setLogin} from '../utils/loginHelpers';
import {Redirect} from 'react-router-dom';

class LoginPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      doRedirect: false,
      loginError: '',
    };
  }

  login = () => {
    login_request({
      username: this.state.username, 
      password: this.state.password
    }).then(responseData => {
      setLogin(responseData.token);
      this.props.setLoginToken(responseData.token);
      this.setState({doRedirect: true});
    }).catch(errorData => {
      this.setState({loginError: 'Invalid username or password'});
      console.log('Error - Invalid login details!');
    });
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      this.login();
    }
  };

  render() {
    return (
      <div style={containerStyle}>
        {this.state.doRedirect && 
          <Redirect to={'/'} />
        }
        <LoginForm 
          username={this.state.username} 
          password={this.state.password} 
          loginError={this.state.loginError} 
          onChangeMethod={this.handleChange}
          onClickMethod={this.login} 
          onKeyPressMethod={this.handleKeyPress}
        />
      </div>
    );
  }
}

const containerStyle = {
  height: '100%',
};

export default LoginPage;