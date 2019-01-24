import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { object as obj } from 'prop-types';
import exact from 'prop-types-exact';
import NavigationHeader from './Header/index';
import NavigationSidebar from './Sidebar/index';

const propTypes = exact({
  history: obj.isRequired,
  match: obj,
  location: obj,
  staticContext: obj,
});

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    history.listen(() => {
      this.toggleSidebar(false);
    });
  }

  toggleSidebar(bool) {
    this.setState({
      isSidebarOpen: bool,
    });
  }

  render() {
    const { isSidebarOpen } = this.state;
    return (
      <div id="nav-root">
        <NavigationHeader isSidebarOpen={isSidebarOpen} toggleSidebar={this.toggleSidebar} />
        <NavigationSidebar isOpen={isSidebarOpen} />
      </div>
    );
  }
}

Navigation.propTypes = propTypes;

export default withRouter(Navigation);
