import React, { Component } from 'react'
import Router from 'next/router'
import NavigationHeader from './Header/index'
import NavigationSidebar from './Sidebar/index'

class Navigation extends Component {
  state = {
    isSidebarOpen: false,
  }

  handleRouteChange = () => {
    this.toggleSidebar(false)
  }
  
  componentDidMount () {
    Router.events.on('routeChangeComplete', this.handleRouteChange)
  }

  componentWillUnmount () {
    Router.events.off('routeChangeComplete', this.handleRouteChange)
  }

  toggleSidebar = (bool) => {
    this.setState({
      isSidebarOpen: bool,
    })
  }

  render () {
    const { isSidebarOpen } = this.state
    return (
      <div id="nav-root">
        <NavigationHeader isSidebarOpen={isSidebarOpen} toggleSidebar={this.toggleSidebar} />
        <NavigationSidebar isOpen={isSidebarOpen} />
      </div>
    )
  }
}

export default Navigation
