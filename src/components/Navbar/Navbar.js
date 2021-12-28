import React, { useState } from "react";
import Styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
function Navbar() {
    let [ isOpened, setOpened ] = useState(false);
    let currentIcon = isOpened ? <img src="assets/icons/menu-white.png" /> : <img src="assets/icons/menu-purple.png" />
    return (
        <div>
            {/* El-Icona bta3t el menu */}
            <div onClick={() => setOpened(!isOpened)} className={`badge ${Styles.menu_icon_box} d-flex justify-content-center align-items-center`}>
                { currentIcon }
            </div>

            {/* El-menu nafso */}
            <div className={`${Styles.menu_container} ${isOpened ? 'd-flex' : Styles.hide } justify-content-center align-items-center`}>
                <ul>
                    <li>
                        <Link to="/" onClick={() => setOpened(!isOpened)}>All Cars</Link>
                    </li>
                    <li>
                        <Link to="/top_rated" onClick={() => setOpened(!isOpened)}>Top Rated</Link>
                    </li>
                    <li>
                        <a href="#">Today Special Offers</a>
                    </li>
                    <li>
                        <Link to="/new_arrival" onClick={() => setOpened(!isOpened)}>New Arrival</Link>
                    </li>
                    <li>
                        <Link to="/most_popular" onClick={() => setOpened(!isOpened)}>Most Popular</Link>
                    </li>
                    <li>
                        <a href="#">Most Luxurious</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;