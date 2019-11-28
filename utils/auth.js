import React, { Component } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import { get } from 'http';

const auth = (ctx) => {
  // pull token off of the context's cookie
  const { token } = nextCookie(ctx);

  // redirect to login if session invalid
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return null;
  }

  // redirect to login if no token
  if (!token) {
    Router.push('/login');
  }

  return token;
};

const getDisplayName = (Component) => Component.displayName || Component.name || 'Component';

export const withAuthSync = (WrappedComponent) => {
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps (ctx) {
      const token = auth(ctx);

      const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    render() {
      return <WrappedComponent { ...this.props } />
    }
  }
}

export { auth as default };
