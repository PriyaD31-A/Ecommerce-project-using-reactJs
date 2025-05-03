import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Pages/Homepage/Home'
import Login from './Components/LoginPage/Loginpage'
import Categories from './Pages/Categoriespage/Categories'
import Offers from './Pages/Offers/Offers'
import Latest from './Pages/Latest/Latest'
import Contact from './Pages/Contact/Contact'

import FancySarees from './Pages/Sarees/FancySarees';
import SilkSarees from './Pages/Sarees/SilkSarees'
import GeorgeteeSarees from './Pages/Sarees/GeorgeteeSarees'
import CottonSarees from './Pages/Sarees/CottonSarees'
import ChiffonSarees from './Pages/Sarees/Chiffonsarees'


import Aliyacut from './Pages/Western/Aliyacut' 
import Anarkalis from './Pages/Western/Anarkalis'
import Organzakurtis from './Pages/Western/Organzakurtis'
import MeterialSet from './Pages/Western/MeterialSet'
import Lehenga from './Pages/Western/Lehenga'
import Tshirts from './Pages/Western/Tshirts'
import Jeanss from './Pages/Western/Jeanss'
import Tops from './Pages/Western/Tops'
import Jumpsuits from './Pages/Western/Jumpsuits'
import Shirts from './Pages/Western/Shirts'


import Jackets from './Pages/Mens wear/Jackets'
import Jeans from './Pages/Mens wear/Jeans'
import CoatSuit from './Pages/Mens wear/CoatSuit'
import Kurta from './Pages/Mens wear/Kurta'
import Tshirt from './Pages/Mens wear/Tshirt'
import Shirt from './Pages/Mens wear/Shirt'


import Shirtt from './Pages/BoysWear/Shirtt'
import Setdress from './Pages/BoysWear/Setdress'
import Jeanns from './Pages/BoysWear/Jeanns'
import Winterwear from './Pages/BoysWear/Winterwear'
import Traditionalwear from './Pages/BoysWear/Traditionalwear'


import Gowns from './Pages/GirlsWear/Gowns'
import Lehengaa from './Pages/GirlsWear/Lehengaa'
import Salwar from './Pages/GirlsWear/Salwar'
import Aarikasets from './Pages/GirlsWear/Aarikasets'
import Kurtis from './Pages/GirlsWear/Kurtis'


import Midi from './Pages/GirlsWestern/Midi'
import Partywears from './Pages/GirlsWestern/Partywears'
import Tshirt1 from './Pages/GirlsWestern/Tshirt1'
import Jeanspant from './Pages/GirlsWestern/Jeanspant'


const App = () => {

  const [cart,setCart] = useState([])

  
  const handleAddToCart = (item) => {
    const isAlreadyInCart = cart.some(cartItem => cartItem.id === item.id);
    if (isAlreadyInCart) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }
    setCart(prevCart => [...prevCart, item]);
  };
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/Offers' element = {<Offers/>} />
        <Route path='/Latest' element = {<Latest/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/fancysarees' element={<FancySarees  handleClick={handleAddToCart}
      cart={cart} setCart={setCart}/>}/>
        <Route path='/silksarees' element={<SilkSarees/>}/>
        <Route path='/Georgeteesarees' element={<GeorgeteeSarees/>}/>
        <Route path='/cottonsarees' element={<CottonSarees/>}/>
        <Route path='/chiffonsarees' element={<ChiffonSarees/>}/>
        
        <Route path='/aliyacut' element={<Aliyacut/>}/>
        <Route path='/anarkalis' element={<Anarkalis/>}/>
        <Route path='/organzakurtis' element={<Organzakurtis/>}/>
        <Route path='/meterialset' element={<MeterialSet/>}/>
        <Route path='/lehenga' element={<Lehenga/>}/>
        <Route path='/tops' element={<Tops/>}/>
        <Route path='/tshirts' element={<Tshirts/>}/>
        <Route path='/jumpsuits' element={<Jumpsuits/>}/>
        <Route path='/jeanss' element={<Jeanss/>}/>
        <Route path='/shirts' element={<Shirts/>}/>

        <Route path='/shirt' element={<Shirt/>}/>
        <Route path='/tshirt' element={<Tshirt/>}/>
        <Route path='/jackets' element={<Jackets/>}/>
        <Route path='/jeans' element={<Jeans/>}/>
        <Route path='/coatsuit' element={<CoatSuit/>}/>
        <Route path='/kurta' element={<Kurta/>}/>


        <Route path='/shirtt' element={<Shirtt/>}/>
        <Route path='/setdress' element={<Setdress/>}/>
        <Route path='/jeanns' element={<Jeanns/>}/>
        <Route path='/winterwear' element={<Winterwear/>}/>
        <Route path='/traditionalwear' element={<Traditionalwear/>}/>
 
        <Route path='/gown' element={<Gowns/>}/>
        <Route path='/lehengaa' element={<Lehengaa/>}/>
        <Route path='/salwar' element={<Salwar/>}/>
        <Route path='/Aarikasets' element={<Aarikasets/>}/>
        <Route path='/kurtis' element={<Kurtis/>}/>

        
        <Route path='/midi' element={<Midi/>}/>
        <Route path='/tshirttss' element={<Tshirt1/>}/>
        <Route path='/jeanpant' element={<Jeanspant/>}/>
        <Route path='partywears' element={<Partywears/>}/>
        
      </Routes>
      
    </div>
  )
}

export default App




