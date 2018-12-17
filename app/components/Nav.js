import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from './SearchForm';
function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li>
          <NavLink exact className='nav-link' activeClassName='nav-link-active' to='/'>
            Popular
          </NavLink>
        </li>
        {/*<li>
          <NavLink className='nav-link' activeClassName='nav-link-active' to='/favourited'>
            Favourited
          </NavLink>
        </li>*/}
      </ul>
      <SearchForm />
    </nav>
  )
}

export default Nav;
