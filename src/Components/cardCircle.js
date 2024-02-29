import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";
import { categoryContext } from './HomePage';

function CircleCard({ category, image, index }) {

    let [isActive,setIsActive] = React.useContext(categoryContext)
    function handleClick() {
       setIsActive(index)
    }
    return (
        <div onMouseOver={handleClick}>
            <div style={{ width: '13vh', backgroundImage: `url(${image})`, height: '10vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <p style={{ fontFamily:'Hammersmith One',fontWeight:'normal'}}>{category} </p>
               { isActive != index &&<RiArrowDropDownLine style={{fontSize:'27px'}} />}
               {isActive == index && <MdKeyboardArrowUp style={{fontSize:'25px'}}/>}
            </div>
        </div>

    )
}

export default CircleCard