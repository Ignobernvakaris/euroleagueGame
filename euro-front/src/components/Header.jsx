import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logoPic from "../assets/logo.jpg";  // Importuojame paveikslėlį

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid"> 
      <Link className="navbar-brand" to="/mainPage">
          <img src={logoPic} alt="Logo" style={{ width: "110px", borderRadius: "50%" }} /> {/* Paveikslėlis */}
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/mainPage">Spėti rezultatą</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/predictionTable">Turnyrinė lentelė</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/predictionPage">Dalyvių spėjimai</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rulesPage">Taisyklės</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
