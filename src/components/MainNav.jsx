import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav = () => {
    return (
        <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/chi-siamo" className="nav-link" aria-current="page" href="#">Chi Siamo</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/posts" className="nav-link" aria-current="page" href="#">Posts</NavLink>
            </li>
        </ul>
    )
}

export default MainNav