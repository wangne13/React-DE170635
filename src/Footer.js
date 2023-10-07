// Footer.js
import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="row-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-5 col-xs-offset-1 col-sm-2 col-sm-offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road<br />
              Clear Water Bay, Kowloon<br />
              HONGcd KONG<br />
              <i className="fa fa-phone"></i>: +852 1234 5678<br />
              <i className="fa fa-fax"></i>: +852 8765 4321<br />
              <i className="fa fa-envelope"></i>:
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="nav navbar-nav" style={{ padding: '40px 10px' }}>
              <a className="btn btn-social-icon btn-google-plus" href="http://google.com/+"><i className="fab fa-google-plus"></i></a>
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
              <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
              <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
              <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
            </div>
          </div>
          <div className="col-xs-12">
            <p style={{ padding: '10px' }}></p>
            <p align="center">© Copyright 2015 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
