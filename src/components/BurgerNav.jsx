import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function BurgerNav() {
  // window.addEventListener("DOMContentLoaded", () => {

  // });

  const burgerBtn = document.getElementById("burger-btn");
  const burgerMenu = document.querySelector(".menu--list--container");
  const exitBtn = document.querySelector(".exit--cross");

  if (burgerBtn) {
    burgerBtn.addEventListener(
      "click",
      () => {
        // console.log("clicked!");
        burgerMenu.style.transform = "translateX(0)";
      },
      true
    );
  }

  if (exitBtn) {
    exitBtn.addEventListener(
      "click",
      () => {
        // console.log("button click!");
        burgerMenu.style.transform = "translateX(250px)";
      },
      false
    );
  }

  return (
    <div id="burger-btn">
      <div className="burger--container">
        <span className="menu--text">Menu</span>
        {/*<input id="menu--toggle" type="checkbox" />*/}
        <label className="burger" htmlFor="menu--toggle">
          <span className="layer"></span>
        </label>
      </div>
      <div className="menu--list--container" id="burger-menu">
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
        <FontAwesomeIcon icon={faX} className="black exit--cross" />
      </div>
    </div>
  );
}
