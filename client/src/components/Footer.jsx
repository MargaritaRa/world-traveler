import React from "react"
import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-links">
                <Link className="footer_inner" to="/">Home</Link>
                <Link className="footer_inner" to="/destinations">Destinations</Link>
                <Link className="footer_inner" to="/favorites">Favorites</Link>
                <Link className="footer_inner" to="/newsletter">Newsletter</Link>
                <Link className="footer_inner" to="/userPanel">Login</Link>
            </div>
        </div>
    )
}