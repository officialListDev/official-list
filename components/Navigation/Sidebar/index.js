import React from 'react';
import Link from 'next/link';
import { bool } from 'prop-types';
import exact from 'prop-types-exact';

const propTypes = exact({
  isOpen: bool,
});

const Sidebar = ({ isOpen }) => (
  <aside id="sidebar" className={`${isOpen ? 'expanded' : ''}`}>
    <nav>
      <ul>
        <li>
          <Link href="/"><a to="/"><div className="nav-item">Dashboard</div></a></Link>
        </li>
        <li>
          <Link href="/search"><a to="/search"><div className="nav-item">Search</div></a></Link>
        </li>
        <li>
          <Link href="/lists"><a to="/lists"><div className="nav-item">Lists</div></a></Link>
        </li>
      </ul>
    </nav>
    <style jsx>
      {`
      aside#sidebar {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 56px;
        z-index: 200;
        background: #ffffff;
        border-right: 1px solid #979797;
        width: 250px;
        height: calc(100vh - 56px);
        transform: translate3d(-250px,0,0);
        transition: 0.3s ease-out;
      }
      aside#sidebar.expanded {
        transform: translate3d(0,0,0);
      }
      aside#sidebar nav ul {
        margin: 0;
        list-style: none;
        padding-left: 0;
      }
      aside#sidebar nav ul li {
        font-size: 22px;
      }
      aside#sidebar nav ul li:hover {
        background-color: rgba(67, 197, 196, 0.15);
      }
      aside#sidebar nav ul li a {
        text-decoration: none;
        color: #5f5f5f;
      }
      .nav-item {
        padding: 0.75rem 1rem;
      }
    `}

    </style>
  </aside>
);

Sidebar.propTypes = propTypes;

Sidebar.defaultProps = {
  isOpen: false,
};

export default Sidebar;
