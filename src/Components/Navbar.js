import { Link } from 'react-router-dom'
import React, { useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { BiUser } from 'react-icons/bi'
import { PiHeartThin } from 'react-icons/pi'
import { TfiSearch } from 'react-icons/tfi'
import { RiArrowDropDownLine } from "react-icons/ri";
import { cartContext, loginContext, wishlistContext } from '../App.js'

function Navbar(props) {
    let [itemCount, , setShow, , , isCountVisible] = useContext(cartContext)

    let [isLogin, setLogin, user, setUser] = React.useContext(loginContext)

    let [wishCountVisible,setWishCountVisible,wishlistCount,setWishlistCount,wishlistItems,setWishlistItems,,,setWishlistModal] = React.useContext(wishlistContext)

    let navigate = useNavigate()
    function handleCartClick() {
        setShow(true)

    }

    function handleWishlistClick()
    {
        setWishlistModal(true)
    }




    let linkref = React.useRef()
    useEffect(() => {
        console.log(isLogin, linkref.current);

    })


    return (
        <div className='navlist'>
            <div id="app_icon"></div>
            <div id="list-options">
                <div style={{ fontSize: '15px' }}>
                    Category
                </div>
                <div>
                    Deals
                </div>
                <div>
                    What's New
                </div>
                <div>
                    Delivery
                </div>
            </div>
            <div id='list_item1'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0px solid black', borderRadius: '60px', width: '100%', height: '80%', backgroundColor: '#ECEFF1', paddingRight: '2%' }}>
                    <TfiSearch style={{ margin: '10px' }} />
                    <input style={{ border: 'none', outline: 'none', width: '100%', fontSize: '18px', backgroundColor: '#ECEFF1', paddingRight: '5%' }} type='search' placeholder='search products brands and more' />
                </div>
            </div>


            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '15%', fontFamily: 'Roboto,Helvetica,Arial,sans-serif' }}>
                <Link ref={linkref} style={{ textDecoration: 'none', fontSize: '22px', color: 'black' }} to={isLogin ? '/profile' : '/login'}><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><BiUser /><span style={{ fontSize: '15px', display: 'flex', justifyContent: 'center' }}>{isLogin ? user : 'login'}</span></div> </Link>

                <div style={{ position: 'relative' }}>
                    <div onClick={handleWishlistClick} style={{ textDecoration: 'none', fontSize: '22px', color: 'black',cursor:'pointer' }}><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><PiHeartThin /><span style={{ fontSize: '16px' }}>wishlist</span></div></div>
                    <div style={{ display: wishCountVisible ? 'block' : 'none', fontSize: '15px', border: '0.5px hidden black', borderRadius: '100%', width: '19px', height: '17px', textAlign: 'center', position: 'absolute', top: '-8px', left: '33px', paddingBottom: '3px', backgroundColor: 'red', color: 'white' }}>{wishlistCount}</div>
                </div>
                <div style={{ position: 'relative' }}>
                    <div onClick={handleCartClick} style={{ display: 'flex', flexDirection: 'column',cursor:'pointer' }}><PiShoppingCartSimpleLight style={{ fontSize: '22px' }} /><span style={{ fontSize: '15px' }}>cart</span></div>
                    <div style={{ display: isCountVisible ? 'block' : 'none', fontSize: '15px', border: '0.5px hidden black', borderRadius: '100%', width: '19px', height: '17px', textAlign: 'center', position: 'absolute', top: '-10px', left: '15px', paddingBottom: '3px', backgroundColor: 'red', color: 'white' }}>{itemCount}</div>
                </div>


            </div>
        </div>
    )
}

export default Navbar
