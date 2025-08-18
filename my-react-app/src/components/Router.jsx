import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Router() {
    return (
      <>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
      </>
  )
}
