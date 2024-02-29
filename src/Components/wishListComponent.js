import React from "react"
import { MdDeleteOutline } from "react-icons/md";

export default function WishlistComponent(props)
{

    const obj = {
        backgroundImage: `url(${props.data[0]})`,
        backgroundSize: 'cover',
        height: '200px',
        width: '20%',
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <div style={obj}>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '30%' }}>
                <p>{props.data[1]}</p>
                <p>&#8377; {props.data[2]}</p>
            </div>
            <div onClick={()=>{}} style={{ fontSize: '25px', display: 'flex', alignItems: 'center' }}><MdDeleteOutline /></div>
        </div>
    )
}