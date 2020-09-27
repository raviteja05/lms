import React from "react";
export const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="/"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <NavSearch />
        </div>
      </nav>
    </React.Fragment>
  );
};

const NavSearch = () => {
  return (
    <React.Fragment>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </React.Fragment>
  );
};

export const Footer = () => {
  return (
    <React.Fragment>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src="../../assets/brand/bootstrap-solid.svg"
              alt=""
              width="24"
              height="24"
            />
            <small className="d-block mb-3 text-muted">© 2017-2018</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
