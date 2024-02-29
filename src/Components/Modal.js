// import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect } from "react"
import { RxCross1 } from "react-icons/rx";

import { cartContext } from '../App.js';
import CartComponent from './CartComponent.js';
export default function ModalComponent() {
    let [cartCount, open, setOpen, , , , , cartItems, totalPrice] = React.useContext(cartContext)

    let modal = {
        display: open ? 'flex' : 'none', /* Hidden by default */
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

    let modalButton = {
        width: '140px',
        height: '50px',
        borderRadius: '6px',
        fontFamily: 'Hammersmith One,IBM Plex Sans',
        backgroundColor: '#0275d8',
        color: 'white',
        outline: '#0275d8',
        borderColor: '#0275d8',
        fontSize: '18px'
    }

    let DeliveryCharges = 100
    let Discount = (5*totalPrice/100)


    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
}

    useEffect( ()=>{
        loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

       
    })

    async function placeOrder()
    {
        const data = await fetch("http://localhost:8000/razorpay",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                totalPrice:totalPrice+DeliveryCharges-Discount
            })
        })
        let res = await data.json()
        var options = {
            "key": "rzp_test_h9T9QKqqcisLVg", // Enter the Key ID generated from the Dashboard
            "amount": res.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": res.currency,
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": res.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });

        rzp1.open();
       
    }



    const handleClose = () => setOpen(false);
    if (cartCount > 0) {
        return (
            <div>
                <div id="myModal" style={modal}>
                    <div className="modal-content">
                        <div className='model-items'>
                            <div className='model-header'>
                                <p className='model-header-text'>Cart</p>
                                <span onClick={handleClose} className="close"><RxCross1 /></span>
                            </div>
                            <hr style={{ width: '100%' }} />
                            <div className='model-body'>
                                {
                                    cartItems.map((data) => {
                                        return <CartComponent data={data} />
                                    })}
                            </div>
                            <hr style={{ width: '100%' }} />
                            <div className='model-fotter'>
                                <button onClick={placeOrder} style={modalButton}>Place Order</button>
                            </div>
                        </div>
                        <div className='model-checkout'>
                            <div className='model-header'>
                                <div className='model-header-text'>Price Details</div>
                            </div>
                            <hr style={{ width: '100%' }} />
                            <div className='model-body'>
                                <div style={{ display: 'flex', justifyContent: 'space-between', lineHeight: '0px' }}>
                                    <p style={{ fontWeight: 'normal', fontFamily: 'Hammersmith One,IBM Plex Sans', fontSize: '20px' }}>price({cartItems.length})</p>
                                    <p style={{fontSize:'20px',fontWeight:'bold'}}>&#8377;{totalPrice}</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', lineHeight: '0px' }}>
                                    <p style={{ fontWeight: 'normal', fontFamily: 'Hammersmith One,IBM Plex Sans', fontSize: '20px' }}>Discount</p>
                                    <p style={{fontSize:'20px',fontWeight:'bold'}}>- &#8377;{Discount}</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', lineHeight: '0px' }}>
                                    <p style={{ fontWeight: 'normal', fontFamily: 'Hammersmith One,IBM Plex Sans', fontSize: '20px' }}>Delivery Charges</p>
                                    <p style={{fontSize:'20px',fontWeight:'bold'}}>&#8377;{DeliveryCharges}</p>
                                </div>
                            </div>
                            <hr style={{ width: '100%' }} />
                            <div style={{ lineHeight: '0px', paddingLeft: '2%',display:'flex',justifyContent:'space-between',paddingRight:'2%' }} className=''>
                                <p style={{ fontWeight: 'bold', fontFamily: 'Hammersmith One,IBM Plex Sans', fontSize: '20px' }}>Total Amount</p>
                                <p style={{fontSize:'20px',fontWeight:'bold'}}>&#8377;{totalPrice+DeliveryCharges-Discount}</p>
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
                            <div style={{display:'flex',alignItems:'center',width:'100%',height:'80%',flexDirection:'column'}}>
                                <div style={{ backgroundImage: 'url(https://blogzine.webestica.com/assets/images/icon/empty-cart.svg)', width: '50%', height: '90%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
                                <h4 style={{fontFamily:'Hammersmith One'}}>looks like Your cart is empty</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
