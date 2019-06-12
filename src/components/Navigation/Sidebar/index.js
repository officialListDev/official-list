import React from 'react'
import { Link } from 'react-router-dom'
import { bool } from 'prop-types'
import exact from 'prop-types-exact'
import './style.css'

const propTypes = exact({
  isOpen: bool,
})

const Sidebar = ({ isOpen }) => (
  <aside id="sidebar" className={`${isOpen ? 'expanded' : ''}`}>
    <nav>
      <ul>
        <li>
          <Link to="/"><div className="nav-item">Dashboard</div></Link>
        </li>
        <li>
          <Link to="/search"><div className="nav-item">Search</div></Link>
        </li>
        <li>
          <Link to="/other"><div className="nav-item">Other</div></Link>
        </li>
      </ul>
    </nav>
  </aside>
)

Sidebar.propTypes = propTypes

Sidebar.defaultProps = {
  isOpen: false,
}

export default Sidebar
