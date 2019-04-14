import React from 'react';
import { bool, func } from 'prop-types';
import exact from 'prop-types-exact';
import '../../../../node_modules/hamburgers/dist/hamburgers.css';
import './style.css';
import Logo from '../../../img/logo.svg';

const propTypes = exact({
  isSidebarOpen: bool.isRequired,
  toggleSidebar: func.isRequired,
});

const Header = ({ isSidebarOpen, toggleSidebar }) => (
  <header>
    <button
      className={`hamburger hamburger--3dx ${isSidebarOpen ? 'is-active' : ''}`}
      type="button"
    >
      <span
        className="hamburger-box"
        onClick={() => toggleSidebar(!isSidebarOpen)}
        onKeyPress={() => toggleSidebar(!isSidebarOpen)}
        tabIndex="0"
        role="button"
      >
        <span className="hamburger-inner" />
      </span>
    </button>
    <img src={Logo} alt="OfficialList" />
    <div id="account-accordion">
      <div id="user-greeting">
        <div id="user-thumb" />
        <p>
          Neil Patrick Harris
          <span id="down-arrow">&nbsp;&#9660;</span>
        </p>
      </div>
    </div>
  </header>
);

Header.propTypes = propTypes;

export default Header;
