import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#d5dcea" }}>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <h4 style={{ color: "#eb9047" }}>Oohr Innovations</h4>
          <p className="nav-link p-0 text-blue">© 2023</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5 style={{ color: "#eb9047" }}>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-blue">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                Features
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                Pricing
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                FAQs
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 style={{ color: "#eb9047" }}>Admin Panel</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/uploadnewbook" className="nav-link p-0 text-blue">
                Update new books
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                Track order
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                Manage stores
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copy" style={{ backgroundColor: "#3d63b0", padding: "20px 0" }}>
  <div className="container">
    <div className="copyright-text">
      <p style={{ textAlign: "center", color: "white" }}>
        Copyright © 2023 Oohr Innovations Private Limited. All Rights Reserved
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Footer;
