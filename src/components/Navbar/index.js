import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <div className="navbar__logo">
                    <Link to="/">BUYPEDAL</Link>
                </div>
                <div className="navbar__links">
                    <ul>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar