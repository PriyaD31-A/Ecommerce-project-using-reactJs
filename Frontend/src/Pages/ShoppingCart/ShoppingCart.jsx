import React, { useState, useEffect } from 'react'
import axios from "axios"
import './ShoppingCart.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SlHeart } from "react-icons/sl"; 

const ShoppingCart = ({search,handleClick}) => {
  const [card, setCard] = useState([]);

  
  const searchDress = card.filter((item) => 
    search === "" || (item.H_Name  && item.H_Name.toLowerCase().includes(search.toLowerCase()))
  )

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/apivalues/Home/")
    .then((response) => {
      setCard(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <div>

      <h1 class="conn">Shop by category</h1>
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 mt-5 justify-content-around ms-2">
             {/* {searchDress.length > 0 ? ( */}
              {searchDress.map((item) => (
                <div className="col p-3" key={item.id}>
                <Card className="align-items-center apply" 
                  style={{ height: "280px" }}>
                  <Card.Img
                    variant="top"
                    src={item.H_Image}
                    style={{ width: "90%", height: "150px", padding: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle1">{item.H_Name}</Card.Title>
                    <p className="money fs-6">upto ₹{item.H_Price}</p>
                    <Button variant="primary cart p-0 mt-2" onClick={() => handleClick(item)}>Add to cart</Button>
                    <div className="wishlist"><SlHeart /></div>
                  </Card.Body>
                </Card>
              </div>
      
              ))
            // ): (
            //   <p>No</p>
             }
          </div>
        </div>
        
      
    </div>
  )
}

export default ShoppingCart
