/**
 * @module login.js
 * @author Austin Ruby
 * @date 11/25/19
 * @description handle login process
 */

import React, { Component } from 'react';
import connect from 'react-redux';
import { string } from 'prop-types';
import exact from 'prop-types-exact';
import fetch from 'isomorphic-unfetch';

import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => ({
  login: (userProfile) => dispatch(actions.login(userProfile)),
});

class Login extends Component {
  // // getting initial component props based on request and process env
  // static getInitialProps ({ req }) {
  //   // use https in production
  //   const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

  //   // process.browser returns true if in client environment, false if in server environment
  //   // if in client, the window.location property will have the host url
  //   // if in server, the request headers will have the host url
  //   const apiUrl = process.browser
  //     ? `${protocol}://${window.location.host}/api/login.js`
  //     : `${protocol}://${req.headers.host}/api/login.js`;

  //   // return apiUrl as kv pair in props object
  //   return { apiUrl };
  // }

  constructor (props) {
    super(props);

    this.state = { username: '', password: '', error: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // as user types username, updates username in state
  handleChange (event) {
    const key = event.target.id;
    const { value } = event.target;
    this.setState({ [key]: value });
  }

  // asynchronously send login info to api on submit
  async handleSubmit (event) {
    // prevent page refresh
    event.preventDefault();
    // destructure username, password, and apiUrl from state and props
    const { username, password } = this.state;
    const { apiUrl } = this.props;

    // fetch from apiUrl sending username and password in body
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      // if response has truthy ok property
      if (response.ok) {
        // destructure userProfile from response
        const { userProfile } = await response.json();
        // dispatch login action with userProfile as payload
      } else {
        console.log('Login failed.');

        // if response does not have truthy token
        // create new Error with response statusText
        // and reject promise passing in error
        const error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
      }
    } catch (error) {
      // log error from rejected promise to the console and throw an error
      console.error(
        'You have an error in your code or there are Network issues',
        error,
      );
      throw new Error(error);
    }
  }

  render () {
    const { username, password, error } = this.state;
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username
            <input
              type="text"
              id="username"
              name="username"
              value={username}
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

Login.propTypes = exact({
  apiUrl: string.isRequired,
});

export default connect(null, mapDispatchToProps)(Login);
