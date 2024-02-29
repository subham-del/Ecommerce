import logo from './logo.svg';
import './App.css';
import HomePage from "./Components/HomePage.js"
import Navbar from './Components/Navbar.js';
import React, { useEffect } from 'react';
import ModalComponent from './Components/Modal.js'
import Loginpg from './Components/Login.js'
import MensTshirts from './Components/MensTshirts.js'
import ProductDesc from './Components/ProductDesc.js'
import MayBeNavBar from './Components/MayBeNavBar.js';
import Loading from './Components/Loading.js';
import Profile from './Components/profile.js';
import WishList from './Components/WishList.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let cartContext = React.createContext()
let loginContext = React.createContext()
let wishlistContext = React.createContext()

function App() {

  let [cartItems, setCartItems] = React.useState([])
  let [cartCount, setCartCount] = React.useState(0)
  let [isCountVisible, setCountVisible] = React.useState(false)
  let [open, setOpen] = React.useState(false);
  let [wishlistModal, setWishlistModal] = React.useState(false)
  let [totalPrice, setTotalPrice] = React.useState(0)
  let [isLogIn, setLogin] = React.useState(false)
  let [user, setUser] = React.useState(null)
  let [wishCountVisible, setWishCountVisible] = React.useState(false)
  let [wishlistItems, setWishlistItems] = React.useState([])
  let [wishlistCount, setWishlistCount] = React.useState(0)

  function deleteCartItems(arr) {
    const result = cartItems.filter((Element) => {

      return JSON.stringify(Element) !== JSON.stringify(arr)

    })
    setCartItems(result)

  }
  function updateItemsArray(arr) {
    setCartItems((cartItems) => [...cartItems, arr])
  }

  function updateWishlistArray(arr) {
    setWishlistItems((wishlistItems) => [...wishlistItems, arr])
  }
  useEffect(() => {
    if (cartCount > 0)
      setCountVisible(true)
    else {
      setTotalPrice(0)
      setCountVisible(false)
    }

    if (wishlistCount > 0)
      setWishCountVisible(true)
    else {
      setWishCountVisible(false)
    }
  }, [cartCount, cartItems, wishlistCount, wishlistItems])


  return (
    <div className="App">
      <BrowserRouter>
        <div>

          <loginContext.Provider value={[isLogIn, setLogin, user, setUser]}>
            <cartContext.Provider value={[cartCount, open, setOpen, setCartCount, updateItemsArray, isCountVisible, setCountVisible, cartItems, totalPrice, setTotalPrice, deleteCartItems]}>
              <wishlistContext.Provider value={[wishCountVisible, setWishCountVisible, wishlistCount, setWishlistCount, wishlistItems, setWishlistItems, updateWishlistArray, wishlistModal, setWishlistModal]}>
                <MayBeNavBar>
                  <Navbar />
                </MayBeNavBar>
                <ModalComponent />
                <WishList />
                <Routes>
                  <Route exact path='/login' Component={Loginpg} />
                  <Route exact path='/profile' Component={Profile} />
                  <Route path='/' Component={HomePage} />
                  <Route exact path='/mens/tshirts' Component={MensTshirts} />
                  <Route exact path='/product-desc' Component={ProductDesc} />
                </Routes>
              </wishlistContext.Provider>
            </cartContext.Provider>
          </loginContext.Provider>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
export { cartContext, loginContext, wishlistContext }
