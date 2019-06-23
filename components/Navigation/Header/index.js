import React from 'react'
import { bool, func } from 'prop-types'
import exact from 'prop-types-exact'

const propTypes = exact({
  isSidebarOpen: bool.isRequired,
  toggleSidebar: func.isRequired,
})

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
    <img src="/static/img/logo.png" alt="OfficialList" />
    <div id="account-accordion">
      <div id="user-greeting">
        <div id="user-thumb" />
        <p>
          Neil Patrick Harris
          <span id="down-arrow">&nbsp;&#9660;</span>
        </p>
      </div>
    </div>
    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 300;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: #FFFFFF;
        border-bottom: 1px solid #979797;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.50);
      }
      button.hamburger {
        width: 225px;
        display: flex;
        align-items: flex-start;
        cursor: default;
      }
      .hamburger-box {
        cursor: pointer;
        outline: none;
      }
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        width: 30px;
      }
      .hamburger.is-active .hamburger-inner::before,
      .hamburger.is-active .hamburger-inner::after,
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: #979797;
      }
      header img {
        align-self: center;
        width: 150px;
        height: auto;
      }
      #account-accordion {
        width: calc(225px - 2rem);
        padding: 0 1rem;
      }
      #user-greeting{ 
        display: flex;
        justify-content: space-between;
      }
      #user-thumb {
        align-self: center;
        min-height: 32px;
        width: 32px;
        border-radius: 100%;
        border: 1px solid #979797;
      }
      #down-arrow {
        margin-left: 3px;
        font-size: 12px;
      }
    `}</style>
  </header>
)

Header.propTypes = propTypes

export default Header
