import React from "react";

export default ({ links, brand }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {brand}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              {links[0]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {links[1]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {links[2]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {links[3]}
            </a>
          </li>
        </ul>
        <div className="my-2 my-lg-0">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </nav>
  );
};
