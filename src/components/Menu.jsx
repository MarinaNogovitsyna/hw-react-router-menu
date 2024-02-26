import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  function isActiveClass(isActive) {
    return isActive ? "menu__item menu__item-active" : "menu__item";
  }

  return (
    <nav className="menu">
      <NavLink to="/" className={({isActive}) => isActiveClass(isActive)}>
        Главная
      </NavLink>
      <NavLink to="/drift" className={({isActive}) => isActiveClass(isActive)}>
        Дрифт-такси
      </NavLink>
      <NavLink to="/timeattack" className={({isActive}) => isActiveClass(isActive)}>
        Time Attack
      </NavLink>
      <NavLink to="/forza" className={({isActive}) => isActiveClass(isActive)}>
        Forza Karting
      </NavLink>
    </nav>
  );
}
