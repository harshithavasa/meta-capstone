import React from "react";
import littlelogo from "../assests/littlelogo.png";

const Footer = () => {
    return(
        <footer>
            <section>
                <div>
                    <img src ={littlelogo} />
                </div>
                <div>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Address</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;