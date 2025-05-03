import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './categories.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SlHeart } from "react-icons/sl";
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Categoriescard from '../Categoriescard';
import Nava from '../../Components/Navbar/Nava';
import Footer from '../../Components/Footer/Footer';

const Categories = () => {
  const imageurl4 = './src/Pages/style3'
  const imageurl5 = './src/assets/men2.jpg'
 
  return (
    <div>
    <Nava/>

    <div className="categories2 mt-5">
      <Navbar expand="lg">
        <Container className="justify-content-between">
          <Nav className="d-flex flex-wrap justify-content-around w-100">

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdQn4JRqVQ0m2iWZbv0qIZRwcF4SVaT6HnQ&s"
                   style={{borderRadius:"50%"}}   className="nav-icon" /> Women Sarees
                </>
              } 
              id="basic-nav-dropdown"
            >
          
              <NavDropdown.Item as={Link} to="/fancysarees">Fancy Sarees</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/silksarees">Silk Sarees</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/georgeteesarees">Georgette Sarees</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cottonsarees">Cotton Sarees</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/chiffonsarees">Chiffon Sarees</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIlTV_zNQSRB1Fisw6nPwNLnyn55z9RwGMw&s"
                 style={{borderRadius:"50%"}} className="nav-icon" /> Kurtis & Western
                </>
              } 
              id="basic-nav-dropdown"
            >
              
              <NavDropdown.Item as={Link} to="/aliyacut">Aliyacut</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/anarkalis">Anarkalis</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/organzakurtis">Organza kurtis</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/meterialset">Meterial set</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lehenga">Lehenga</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tops">Tops</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tshirts">Tshirts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jumpsuits">Jumpsuits</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shirts">Shirts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jeanss">Jeans</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5FHZRoKmmhDFYGfzZzF_Y4sFjUeecfogSw&s"
                  style={{borderRadius:"50%"}}   className="nav-icon" /> Men Wears
                </>
              } 
              id="basic-nav-dropdown"
            >
            
              <NavDropdown.Item as={Link} to="/shirt">Shirts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tshirt">Tshirts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jackets">Jackets</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jeans">Jeans pants</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/coatsuit">Coatsuit</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kurta">Kurta</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFPSDGyJAXjSXpV5p9BrTWftuiKrJ4gvhnQ&s"
                  style={{borderRadius:"50%"}}  
                   className="nav-icon" /> Boys Kids Wears
                </>
              } 
              id="basic-nav-dropdown"
            > 
              <NavDropdown.Item as={Link} to="/shirtt">Shirts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/setdress">Set dress</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jeanns">Jeans</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/winterwear">Winter wear</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/traditionalwear">Traditionalwear</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjVKV9S_WYufnOPa4iiCQlh2gPkH_N-VG7w&s" 
                  style={{borderRadius:"50%"}} 
                  className="nav-icon" /> Girls Ethnic Wears
                </>
              } 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/gown">Gown</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lehengaa">Lehenga</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/salwar">Salwar sets</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Aarikasets">Aarika sets</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kurtis">Kurtis</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbj5AvRvgket1kLmcIhJ_5PMWXnkHuhfF-Yg&s" 
                  style={{borderRadius:"50%"}}  
                  className="nav-icon"  /> Girls western
                </>
              } 
              id="basic-nav-dropdown"
            >

              <NavDropdown.Item as={Link} to="/midi">Midi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tshirttss">T-shirts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jeanpant">Jeans</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/partywears">Party wears</NavDropdown.Item>
              
            </NavDropdown>
            </Nav>
        </Container>
      </Navbar>
    </div>

        <div className='container'>
          <div className='row mt-5'>
            <div className='backimg'><h1 class="text-white categories1 img-fluid">Categories</h1></div>
          </div>
        </div>






{/* <div>
<div class="container-fluid category">
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 ms-2 gy-5'>
        {
          Images4.map((user2) =>(
            <div className='col'>
                    <img src={user2.img} alt="not found" className='img-fluid img-top' height="300px"  width="300px"/>
                    <p className="text1 mt-3 fs-4">{user2.name}</p>
              </div>

          ))
        }
      </div>
  </div>
</div>
</div> */}


<Categoriescard/>

<Footer/>



</div>

)
}

export default Categories
