/**
 * @module login.js
 * @author Austin Ruby
 * @date 11/25/19
 * @description handle login process
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { useRouter } from 'next/router';
import { string } from 'prop-types';
import exact from 'prop-types-exact';
import fetch from 'isomorphic-unfetch';

import * as actions from '../actions';
import { apiUrl } from '../static/constants/api';

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (userProfile) => dispatch(actions.loginRequest(userProfile)),
  loginSuccess: (userProfile) => {
    console.log('dispatch in loginSuccess in login.js: ', dispatch);
    return dispatch(actions.loginSuccess(userProfile));
  },
});

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = { email: '', password: '', error: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // as user types email/password, updates email/password in state
  handleChange (event) {
    const key = event.target.id;
    const { value } = event.target;
    this.setState({ [key]: value });
  }

  // asynchronously send login info to api on submit
  async handleSubmit (event) {
    // prevent page refresh
    event.preventDefault();
    // destructure email, password, and apiUrl from state and props
    const { email, password } = this.state;

    // // fetch from apiUrl sending email and password in body
    // try {
    //   const response = await fetch(`${apiUrl}/auth/director/login`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   // if response has truthy ok property
    //   if (response.ok) {
    //     // destructure userProfile from response
    //     const directorProfile = await response.json();
    //     // dispatch login action with userProfile as payload
    //     console.log('server response: ', directorProfile);
    //   } else {
    //     console.log('Login failed.');

    //     // if response does not have truthy token
    //     // print 'email and password combination not found'
    //   }
    // } catch (error) {
    //   // log error from rejected promise to the console and throw an error
    //   console.error(
    //     'You have an error in your code or there are Network issues',
    //     error,
    //   );
    //   throw new Error(error);
    // }
    const { loginRequest } = this.props;
    loginRequest({ email, password });
  }

  render () {
    const { email, password, error } = this.state;
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Login</button>

          <p className={`error ${error && 'show'}`}>
            {error && `Error: ${error}`}
          </p>
        </form>
        <style jsx>
          {`
            .login {
              max-width: 340px;
              margin: 200px;
              padding: 1rem;
              border: 1px solid #ccc;
              border-radius: 4px;
            }
            form {
              display: flex;
              flex-flow: column;
            }
            label {
              font-weight: 600;
            }
            input {
              padding: 8px;
              margin: 0.3rem 0 1rem;
              border: 1px solid #ccc;
              border-radius: 4px;
            }
            .error {
              margin: 0.5rem 0 0;
              display: none;
              color: brown;
            }
            .error.show {
              display: block;
            }
          `}
        </style>
      </div>
    );
  }
}

// Login.propTypes = exact({
//   apiUrl: string.isRequired,
// });

export default connect(null, mapDispatchToProps)(Login);
// export default Login;
