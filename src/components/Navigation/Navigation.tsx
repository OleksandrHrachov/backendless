import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { Path } from "../../path";

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink className="nav__link nav__link-list" to={Path.LIST}>
        Dummy List
      </NavLink>

      <NavLink className="nav__link nav__link-table" to={Path.TABLE}>
        Dummy Table
      </NavLink>

      <NavLink className="nav__link nav__link-chart" to={Path.CHART}>
        Dummy Chart
      </NavLink>
    </nav>
  );
}
