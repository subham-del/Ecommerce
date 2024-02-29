import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import React from "react"
import CartComponent from "./CartComponent";
import { wishlistContext } from "../App";
import WishListComponent from "./wishListComponent";

export default function WishList() {

    let [wishCountVisible, setWishCountVisible, wishlistCount, setWishlistCount, wishlistItems, setWishlistItems, updateWishlistArray, wishlistModal, setWishlistModal] = React.useContext(wishlistContext)


    let modal = {
        display: wishlistModal ? 'flex' : 'none', /* Hidden by default */
        position: 'fixed', /* Stay in place */
        zIndex: '1', /* Sit on top */
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',/* Full height */
        overflow: 'auto',
        backgroundColor: 'rgb(0,0,0)', /* Fallback color */
        backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */

    }

    let modal_content = {
        position: 'relative',
        top: '0',

        display: 'flex',

        borderRadius: '10px',
        backgroundColor: '#CFD8DC',

        width: '50%',
        margin: 'auto',

        minHeight: '35%'/* Could be more or less, depending on screen size */
    }

    let modal_items = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        backgroundColor: '#fefefe',
        width: '100%',
        margin: '2%',
    }


    const handleClose = () => setWishlistModal(false);
    if (wishlistCount > 0) {
        return (
            <div>
                <div id="myModal" style={modal}>
                    <div style={modal_content}>
                        <div style={modal_items}>
                            <div className='model-header'>
                                <p className='model-header-text'>WishList</p>
                                <span onClick={handleClose} className="close"><RxCross1 /></span>
                            </div>
                            <hr style={{ width: '100%' }} />
                            <div className='model-body'>
                                {
                                    wishlistItems.map((data) => {
                                        return <WishListComponent data={data} />
                                    })}
                            </div>
                            <hr style={{ width: '100%' }} />
                            <div className='model-fotter'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div id="myModal" style={modal}>
                    <div className="modal-empty-cart-content">
                        <div className='model-empty-cart'>
                            <div className='model-empty-header'>
                                <span onClick={handleClose} className="modal-close"><RxCross1 /></span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '80%', flexDirection: 'column' }}>
                                <div style={{ backgroundImage: 'url(https://blogzine.webestica.com/assets/images/icon/empty-cart.svg)', width: '50%', height: '90%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
                                <h4 style={{ fontFamily: 'Hammersmith One' }}>looks like Your wishlist is empty</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}