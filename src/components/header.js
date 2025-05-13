import React from "react";
import cafe from "../assests/cafe.jpg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <section>
                <div>
                    <h2>The Little Lemon Restaurant</h2>
                    <h3>Explore our Mediterraneran cuisine, traditional yet with morden twist</h3>
                    <Link to=""><button aria-label="On Click">Book Your Table</button></Link>
                </div>
                <div>
                    <img src = {cafe} />
                </div>
            </section>
        </header>
    )
}

export default Header;