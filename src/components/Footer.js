import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>We are a leading seller of quality products <br/>
                for your home and garden.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: sales@mysite.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Facebook</a>
                
                </li>
                
              <li className="list-inline-item"><a href="#">Twitter</a></li>
              <li className="list-inline-item"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center">&copy; 2023 MySite. All rights reserved.</p>
   
    </footer>
  );
}

export default Footer;
