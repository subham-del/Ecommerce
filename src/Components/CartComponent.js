import { MdDeleteOutline } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react"
import { cartContext } from "../App";
export default function CartComponent(props) {
    let [cartCount, , , setCartCount, updateItemsArray, , , cartItems, , setTotalPrice, deleteCartItems] = useContext(cartContext)
    let [count, setCount] = useState(1)
    let [price, setPrice] = useState(0)
    let [previous,setPrevious] = useState(null)

    const obj = {
        backgroundImage: `url(${props.data[0]})`,
        backgroundSize: 'cover',
        height: '200px',
        width: '20%',
    }



    useEffect(() => {

        if (count >= 1) {
            setPrice(count * props.data[2])
        }
    }, [count])

    useEffect(() => {
        if (count > previous) { 
            console.log(previous,count)
            let res = price - ((count - 1) * props.data[2])
            setTotalPrice((totalPrice) => (totalPrice + res) ) }
        else if(count <=previous)
        {
            console.log("hii")
            setTotalPrice((totalPrice) => (totalPrice - props.data[2]) )
        }
        else
            setTotalPrice((totalPrice) => (totalPrice + price))
    }, [price]
    )


    function handleDelete() {
        deleteCartItems(props.data)
        setCartCount((cartCount) => cartCount - 1)
    }

    function handleMinus() {
        if (count > 1)
        {
            setCount((count) =>count - 1);
           
        }
        
    }
    function handlePlus() {
        setCount((count) => {
            setPrevious(count)
            return count + 1});
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <div style={obj}>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '30%' }}>
                <p>{props.data[1]}</p>
                <p>&#8377; {price}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '14%', justifyContent: 'center' }}>
                <div><button onClick={handleMinus} style={{ width: '25px', height: '25px', outline: 'none', border: 'none', borderRadius: '5px', fontSize: '20px' }}>-</button></div>
                <div style={{ width: '25px', display: 'flex', justifyContent: 'center' }}>{count}</div>
                <div><button onClick={handlePlus} style={{ width: '25px', height: '25px', outline: 'none', border: 'none', borderRadius: '5px', fontSize: '20px' }}>+</button></div>
            </div>
            <div onClick={handleDelete} style={{ fontSize: '25px', display: 'flex', alignItems: 'center' }}><MdDeleteOutline /></div>
        </div>
    )
}
