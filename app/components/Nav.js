import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className='nav-list'>
        <li>
          <NavLink exact className='nav-link' activeClassName='nav-link-active' to='/'>
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' activeClassName='nav-link-active' to='/favourited'>
            Favourited
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}