import React from "react";
import llogo from "../assests/llogo.png";

const Nav = () => {
    return (
        <nav>
            <img src={llogo} alt="Little Lemon Logo"></img>
            <ul>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Book Table</a></li>
                <li><a>Order</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;