import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
const navbar = () => {
    return (
        <nav className="topnav">

            <div >

                <ul className="toplist">
                    <Link to='/'>
                        <li >Home</li>
                    </Link>
                    <Link to='/createsite'>
                        <li>Create Site</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>

                </ul>
            </div>
        </nav>
    )
}

export default navbar
