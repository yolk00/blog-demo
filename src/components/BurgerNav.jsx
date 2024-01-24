import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function BurgerNav() {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <div>
      <div className="burger--container" onClick={toggle}>
        <span className="menu--text">Menu</span>
        <label className="burger" htmlFor="menu--toggle">
          <span className="layer"></span>
        </label>
      </div>
      <div
        className={`menu--list--container ${isActive ? "active" : "inactive"}`}
      >
        <ul className="burger--nav--menu">
          <a href="#">
            <li className="burger--nav--menu--item">menu item 1</li>
          </a>
          <a href="#">
            <li className="burger--nav--menu--item">menu item 2</li>
          </a>
          <a href="#">
            <li className="burger--nav--menu--item">menu item 3</li>
          </a>
          <a href="#">
            <li className="burger--nav--menu--item">menu item 4</li>
          </a>
        </ul>
        <FontAwesomeIcon
          icon={faX}
          className="black exit--cross"
          onClick={toggle}
        />
      </div>
    </div>
  );
}
