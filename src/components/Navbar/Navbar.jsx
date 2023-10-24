import React from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    {/* <Link to='/'> */}
                        <span className="test">fiverr</span>
                    {/* </Link> */}
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    <span>Become a Seller</span>
                    <button>Join</button>
                </div>
            </div>
            <hr />
            <span className="menu">Test</span>
            <span className="menu">Test</span>
        </div>
    )
}

export default Navbar