import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
function Nav() {

    const navStyles = {
        color: 'white'
    }
    return (
    <nav>
        <Link to="/" style={navStyles}>
        <h1>Logo</h1>
        </Link>
      
        <ul className="nav-links">
            <Link to="/about"  style={navStyles}>
            <li >About</li>
            </Link>
             <Link to="/shop" style={navStyles}>
             <li >Shop</li>
             </Link>
           
        </ul>
    </nav>
    )
}



export default Nav

