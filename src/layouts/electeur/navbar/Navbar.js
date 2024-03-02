import React from "react";
import './Navbar.css'
import { NavLink, useNavigate } from "react-router-dom";
import Election from '../../../assets/Election.png'

export default function Navbar() {
    const [showNavbar, setShowNavbar] = React.useState(false);
    const navigate = useNavigate()

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    return (
        <div>
            <nav className="navbar navbar_nav electeur">
                <div className="container container-navbar">
                    <div className="logo">
                        <img src={Election} alt=""/> 
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <Hamburger />
                    </div>
                    <div className={`nav-elements  ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <NavLink to="/electeur/home">Accueil</NavLink>
                        </li>
                        <li>
                            <button className="btn btn-primary">Connexion</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#574c4c"
        />
      </g>
    </svg>
);