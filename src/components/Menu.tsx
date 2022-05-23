import React from "react";

function Menu() {
    return (
        <nav className="nav">
            <ul className="nav__container">
                <li className="nav__item">
                    <a href="updates.html" className="nav__link">Travel Updates</a>
                </li>
                <li className="nav__item">
                    <a href="reviews.html" className="nav__link">Reviews</a>
                </li>
                <li className="nav__item">
                    <a href="about.html" className="nav__link">About</a>
                </li>
                <li className="nav__item">
                    <a href="contact.html" className="nav__link">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;