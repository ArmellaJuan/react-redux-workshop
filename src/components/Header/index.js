import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div className="header">
    <ul>
      <li>
        <Link to="/simple-component">Simple Component</Link>
      </li>
      <li>
        <Link to="/simple-component-state">Simple Component State</Link>
      </li>
      <li>
        <Link to="/component-composition">Component Composition</Link>
      </li>
      <li>
        <Link to="/life-hooks-sample">Life Hooks Sample</Link>
      </li>
    </ul>
  </div>
);

export default Header;
