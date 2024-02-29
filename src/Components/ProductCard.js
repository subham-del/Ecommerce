import React from 'react'
import { useNavigate } from "react-router-dom"
import { BsHeart } from "react-icons/bs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeart1 } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeart2 } from '@fortawesome/free-regular-svg-icons'
import { product_data } from './MensTshirts'
function ProductCard(props) {

    // let [isColorEnabled, setColor] = React.useState(false)
    let [iconSwitch, setIcon] = React.useState(false)
    const navigate = useNavigate()
    function handleClick() {
        navigate("/product-desc", { state: props })
    }

    function handleWishlist(event) {
      
        event.stopPropagation()
        if(iconSwitch === false)
            setIcon(iconSwitch = true)
        else    
            setIcon(iconSwitch = false)
    }
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '250px', backgroundColor: 'white' }}>
                <div onClick={handleClick} style={{ position: 'relative', backgroundImage: `url(${props.data.brand_img[0]})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '300px', backgroundColor: '#CFD8DC', borderRadius: '5px'   }}>
                    <div onClick={handleWishlist} style={{ position: 'absolute', left: '2%', top: '3%', borderRadius: '100%', backgroundColor: 'white', width: '15%', height: '12%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {iconSwitch ? <FontAwesomeIcon style={{ fontSize: '21px', color: 'red' }} icon={faHeart1} /> : <FontAwesomeIcon style={{ fontSize: '21px' }} icon={faHeart2} />}
                        
                    </div>
                </div>
                <div style={{ width: '100%', height: '60px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{}}><label style={{ fontFamily: 'Hammersmith One,IBM Plex Sans' }}>{props.data.brand_name}</label></div>
                    <p style={{ fontWeight: 'bold', marginTop: '0px' }}>₹{props.data.brand_price} <span style={{ fontWeight: 'normal' }}>MRP</span> <span style={{ textDecoration: "line-through", fontWeight: 'normal' }}>₹{props.data.brand_price + 1000}</span><span style={{ color: '#FB8C00' }}> ({Math.floor(100 - (props.data.brand_price / (1000 + props.data.brand_price) * 100))}% OFF)</span></p>


                </div>
            </div>
        </div>
    )
}

export default ProductCard