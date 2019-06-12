import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { object as obj } from 'prop-types'
import exact from 'prop-types-exact'
import NavigationHeader from './Header/index'
import NavigationSidebar from './Sidebar/index'

class Navigation extends Component {
  state = {
    isSidebarOpen: false,
  }

  componentDidMount() {
    const { history } = this.props
    history.listen(() => {
      this.toggleSidebar(false)
    })
  }

  toggleSidebar = (bool) => {
    this.setState({
      isSidebarOpen: bool,
    })
  }

  render() {
    const { isSidebarOpen } = this.state
    return (
      <div id="nav-root">
        <NavigationHeader isSidebarOpen={isSidebarOpen} toggleSidebar={this.toggleSidebar} />
        <NavigationSidebar isOpen={isSidebarOpen} />
      </div>
    )
  }
}

Navigation.propTypes = exact({
  history: obj.isRequired,
  match: obj,
  location: obj,
  staticContext: obj,
})

export default withRouter(Navigation)
