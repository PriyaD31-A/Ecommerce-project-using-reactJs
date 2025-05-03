import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoSearchSharp } from "react-icons/io5";
import { SlHeart } from "react-icons/sl";
import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import './Nava.css';

function Nava({ cart = [], cartCount }) {  // Default cart is an empty array
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleProfileClose = () => setShowProfile(false);
  const handleProfileShow = () => setShowProfile(true);

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);

  return (
    <div>
      <Navbar expand="lg" className="nav1">
        <Container>
          <Navbar.Brand id="head">ShinyCart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navv">
            <Nav className="mx-auto">
              <Nav.Link><Link to="/" id="nav2">Home</Link></Nav.Link>
              <Nav.Link><Link to="/Categories" id="nav2">Categories</Link></Nav.Link>
              <Nav.Link><Link to="/Offers" id="nav2">Offers</Link></Nav.Link>
              <Nav.Link><Link to="/Latest" id="nav2">Latest</Link></Nav.Link>
              <Nav.Link><Link to="/Contact" id="nav2">Contact</Link></Nav.Link>
            </Nav>

            <div className='contain'>
              <div className='nav3 nav4'><Nav.Link href="#"><IoSearchSharp /></Nav.Link></div>
              <div className='nav3'><Nav.Link href="#"><SlHeart /></Nav.Link></div>

              {/*  Cart Icon with badge */}
              <div className='nav3 position-relative'>
                <Nav.Link href="#" onClick={handleCartShow}>
                  <FaCartArrowDown />
                  {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
                </Nav.Link>
              </div>

              {/*  Profile Icon */}
              <div className='nav3'>
                <Nav.Link href="#" onClick={handleProfileShow}><CgProfile /></Nav.Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Profile Offcanvas */}
      <Offcanvas show={showProfile} onHide={handleProfileClose} placement="end">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Link to="/Login" className='logde'>Login</Link>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Cart Items Offcanvas */}
      <Offcanvas show={showCart} onHide={handleCartClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
          {/* Handle cart length correctly */}
          {Array.isArray(cart) && cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-3 border-bottom pb-2">
                <img
                  src={item.H_Image || item.T_Image}
                  alt={item.H_Name || item.T_Name}
                  style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "10px" }}
                />
                <div>
                  <p className="mb-1 fw-bold">{item.H_Name || item.T_Name}</p>
                  <p className="mb-0 text-muted">₹{item.H_Price || item.T_Price}</p>
                </div>
              </div>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Nava;
