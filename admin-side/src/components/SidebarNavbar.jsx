import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
export default function SidebarNavbar() {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    navigate('/login');
  };
    return (
        <>
          <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
              <a
                href="https://www.creative-tim.com"
                className="simple-text logo-normal"
                style={{ textAlign: "center" }}
              >
                McDonal's
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li className="active ">
                  <Link to="/">
                    <i className="nc-icon nc-bank" />
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <Link to="/item">
                    <i className="nc-icon nc-tile-56" />
                    <p>Item</p>
                  </Link>
                </li>
                <li>
                  <Link to="/category">
                    <i className="nc-icon nc-diamond" />
                    <p>Category</p>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <i className="nc-icon nc-single-02" />
                    <p>Register Admin</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-panel">
          <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <a className="navbar-brand" href="javascript:;">ADMIN PANEL</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav">
              <li className="nav-item btn-rotate dropdown">
                  <i onClick={handleLogout} className="fa fa-sign-out" 
                  style={{ fontSize: '25px', marginRight: "5px", cursor: "pointer" }}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          </div>
      </>
    )
}