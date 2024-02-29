import Navbar from "./Navbar"
import { useLocation } from "react-router-dom"
import { BsCart2 } from "react-icons/bs"
// import { CiStar } from "react-icons/ci"
import React, { useEffect } from "react"
// import { GrStar } from "react-icons/gr"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { TbTruckDelivery } from "react-icons/tb"


import { cartContext, wishlistContext } from "../App"


function ProductDesc() {

    let location = useLocation()
    let ref1 = React.useRef()
    let ref2 = React.useRef()
    let ref3 = React.useRef()
    let ref4 = React.useRef()
    let ref5 = React.useRef()
    let ref6 = React.useRef()
    let ref7 = React.useRef()
   
    let [backImage, setBackGroungImg] = React.useState(location.state.data.brand_img[0])

    let [, , , setCartCount, updateItemsArray, , , cartItems,,setTotalPrice] = React.useContext(cartContext)

    let [wishCountVisible,setCountVisible,wishlistCount,setWishlistCount,wishlistItems,setWishlistItems,updateWishlistArray] = React.useContext(wishlistContext)

    function handleChangeImage(e) {

        ref5.current.style.backgroundImage = e.target.style.backgroundImage
    }

    function handleCartClick(e) {
        if (!JSON.stringify(cartItems).includes(JSON.stringify([location.state.data.brand_img[0], location.state.data.brand_description, location.state.data.brand_price]))) {
           
            updateItemsArray([location.state.data.brand_img[0], location.state.data.brand_description, location.state.data.brand_price])
            setCartCount((cartCount) => cartCount + 1)
            
        }  
    }

    function handleWishlistClick()
    {
        if (!JSON.stringify(wishlistItems).includes(JSON.stringify([location.state.data.brand_img[0], location.state.data.brand_description, location.state.data.brand_price]))) {
           
            updateWishlistArray([location.state.data.brand_img[0], location.state.data.brand_description, location.state.data.brand_price])
            setWishlistCount((wishlistCount) => wishlistCount + 1)
            
        }  
    }

    useEffect(()=>{
        if(JSON.stringify(cartItems).includes(JSON.stringify([location.state.data.brand_img[0], location.state.data.brand_description, location.state.data.brand_price])))
        {
            ref6.current.innerText = "Added"
           
            
        }
        else{
            ref6.current.innerText = "Add to cart"
           
        }

        if(JSON.stringify(wishlistItems).includes(JSON.stringify([location.state.data.brand_img[0], location.state.data.brand_description, location.state.data.brand_price])))
        {
            ref7.current.innerText = "Added"
           
            
        }
        else{
            ref7.current.innerText = "Wishlist"
           
        }

       
    },[cartItems,wishlistItems])

   

    return (
        <div style={{marginTop:'4%'}}>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%', height: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '2%' }}>
                    <p style={{ fontFamily: 'Hammersmith One,IBM Plex Sans' }}>Home &gt; Mens &gt; Tshirts &gt; {location.state.data.brand_name}</p>
                    <div style={{ display: 'flex', width: '90%', height: '100%', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '20%', justifyContent: 'space-between' }}>
                            <div onClick={handleChangeImage} ref={ref1} style={{ boxShadow: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', width: '99%', border: '1px hidden black', height: '150px', borderRadius: '10px', backgroundImage: `url(${location.state.data.brand_img[0]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}></div>
                            <div onClick={handleChangeImage} ref={ref2} style={{ boxShadow: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', width: '99%', border: '1px hidden black', height: '150px', borderRadius: '10px', backgroundImage: `url(${location.state.data.brand_img[1]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}></div>
                            <div onClick={handleChangeImage} ref={ref3} style={{ boxShadow: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', width: '99%', border: '1px hidden black', height: '150px', borderRadius: '10px', backgroundImage: `url(${location.state.data.brand_img[2]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}></div>
                            <div onClick={handleChangeImage} ref={ref4} style={{ boxShadow: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', width: '99%', border: '1px hidden black', height: '150px', borderRadius: '10px', backgroundImage: `url(${location.state.data.brand_img[3]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}></div>
                        </div>
                        <div ref={ref5} style={{ filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 1))', border: '1px hidden black', width: '70%', height: '100%', backgroundImage: `url(${backImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}>

                        </div>
                    </div>
                </div>
                <div style={{ width: '50%', lineHeight: '0%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2>{location.state.data.brand_name}</h2>
                    <p style={{ marginBottom: '35px', fontFamily: 'Hammersmith One,IBM Plex Sans' }}>{location.state.data.brand_description}</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faStar} style={{ color: '#FFD600' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: '#FFD600' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: '#FFD600' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: '#FFD600' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: '#FFD600' }} />
                        <p style={{ marginLeft: '5px' }}>5.0</p>
                    </div>

                    <h3>₹{location.state.data.brand_price} <span style={{ fontWeight: 'normal' }}>MRP</span> <span style={{ textDecoration: "line-through", fontWeight: 'normal' }}>₹{location.state.data.brand_price + 1000}</span> ({Math.floor(100 - (location.state.data.brand_price / (1000 + location.state.data.brand_price) * 100))}% OFF)</h3>
                    <p style={{ marginBottom: '35px', fontFamily: 'Hammersmith One,IBM Plex Sans' }}>inclusive of all taxes</p>
                    <h3 style={{ marginBottom: '30px', fontFamily: 'Hammersmith One,IBM Plex Sans' }}>SELECT SIZE</h3>
                    <div style={{ display: 'flex', marginBottom: '20px', fontFamily: 'Hammersmith One,IBM Plex Sans' }}>
                        <div style={{ backgroundColor: '#ECEFF1', border: '1px hidden black', borderRadius: '25%', width: '5%', height: '45px', marginRight: "1%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>XS</p></div>
                        <div style={{ backgroundColor: '#ECEFF1', border: '1px hidden black', borderRadius: '25%', width: '5%', height: '45px', marginRight: "1%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>S</p></div>
                        <div style={{ backgroundColor: '#ECEFF1', border: '1px hidden black', borderRadius: '25%', width: '5%', height: '45px', marginRight: "1%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>M</p></div>
                        <div style={{ backgroundColor: '#ECEFF1', border: '1px hidden black', borderRadius: '25%', width: '5%', height: '45px', marginRight: "1%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>L</p></div>
                        <div style={{ backgroundColor: '#ECEFF1', border: '1px hidden black', borderRadius: '25%', width: '5%', height: '45px', marginRight: "1%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>XL</p></div>
                    </div>
                    <h3 style={{ fontFamily: 'Hammersmith One,IBM Plex Sans' }}>Colours available</h3>
                    <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                        <div style={{ width: '17%', height: '30px', border: '1px hidden transparent', borderRadius: '100%', backgroundColor: '#ee0290' }}>

                        </div>
                        <div style={{ width: '17%', height: '30px', border: '1px hidden transparent', borderRadius: '100%', backgroundColor: '#d602ee' }}>

                        </div>
                        <div style={{ width: '17%', height: '30px', border: '1px hidden transparent', borderRadius: '100%', backgroundColor: '#021aee' }}>

                        </div>
                        <div style={{ width: '17%', height: '30px', border: '1px hidden transparent', borderRadius: '100%', backgroundColor: '#ee6002' }}>

                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '22.5%' }}>
                        <h3 style={{ fontFamily: 'Hammersmith One,IBM Plex Sans', fontSize: '20px' }}>Delivery options</h3>
                        <TbTruckDelivery style={{ fontSize: '25px' }} />
                    </div>
                    <div style={{ position: 'relative', marginBottom: '2%' }}>
                        <input style={{ width: '250px', height: '40px', fontSize: '18px', fontFamily: 'Hammersmith One,IBM Plex Sans' }} placeholder="enter pincode" />
                        <h3 style={{ position: 'absolute', top: '4px', left: '200px', fontSize: '18px', cursor: 'pointer' }}>check</h3>
                        <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    </div>
                    <div>
                        <button ref={ref6} onClick={handleCartClick} style={{ width: '25%', height: '50px', borderRadius: '5px', marginRight: '20px', backgroundColor: '#3B71CA', color: 'white', fontSize: '18px', textAlign: 'center', border: '0px' }}><BsCart2 style={{ fontSize: '18px', marginRight: '8px' }} />Add to cart</button>
                        <button ref={ref7} onClick={handleWishlistClick} style={{ width: '20%', height: '50px', borderRadius: '5px', fontSize: '19px', }}>wishlist</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductDesc

