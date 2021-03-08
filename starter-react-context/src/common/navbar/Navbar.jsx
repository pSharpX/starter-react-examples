import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../../shared/search/SearchBox";
import { SecureButton } from "../../auth/secure/PrivateRoute";
// import withAuthorization from "../../../core/auth/withAutorization";
import { DataContext } from "../../context/DataContext";

export default function AppNavbar() {
  const [data, setData] = useContext(DataContext);

  const handlerSearch = (event) => {
    event.preventDefault();
    const value = event.target.input.value;
    alert(`Searching ${value}`);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <Link
        to="/"
        className="rounded-circle navbar-brand mr-auto mr-md-2 mr-lg-0"
      >
        shopping-cart
      </Link>
      <button
        className="navbar-toggler p-0 border-0"
        type="button"
        data-toggle="offcanvas"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="navbar-collapse offcanvas-collapse"
        id="navbarsExampleDefault"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Dashboard <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notifications" className="nav-link">
              Notifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Settings
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <SecureButton className="dropdown-item" />
              <Link className="dropdown-item" to="/edit-profile">
                Edit Profile
              </Link>
              <Link className="dropdown-item" to="/logout">
                Log Out
              </Link>
            </div>
          </li>
        </ul>
        <SearchBox onSearch={handlerSearch} />
      </div>
    </nav>
  );
}
