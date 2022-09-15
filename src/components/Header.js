import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          <i className="bi bi-shop mx-2"></i>
          {props.name}
        </Link>
        <ul className="navbar-nav flex-row">
          <li className="nav-item me-3">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
