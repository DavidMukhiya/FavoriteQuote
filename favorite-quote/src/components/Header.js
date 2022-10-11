import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const Header = () => {
  return (
    <Nav>
        <NavItem>
            <NavLink className='nav-link' to='/'>
                Home
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-link' to='/love'>
                Love
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-link' to='/life' >
                Life
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-Link' to='/inspiration'>
                Inspiration
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-Link' to='/funny'>
                Funny
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-Link' to='/proverb'>
                Proverb
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-Link' to='/addquotes'>
                Add Quote
            </NavLink>
        </NavItem>
    </Nav>
  )
}

export default Header