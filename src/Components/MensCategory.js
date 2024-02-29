import ProductCard from "./ProductCard"
import { MdOutlineKeyboardArrowLeft, MdChevronRight } from "react-icons/md";
import React from "react"
export default function MensCategory({ title, array_name }) {
    let refMens = React.useRef()
    function handleRight(){
        refMens.current.scrollLeft += refMens.current.clientWidth
    }

    function handleLeft(){
        refMens.current.scrollLeft -= refMens.current.clientWidth
    }

    return (

        <div style={{ position: 'relative', maxWidth: '100%', marginLeft: '2%', marginRight: '1%' }}>
            <div style={{ position: 'absolute', top: '40%', left: '-20px', zIndex: '1' }}>
                <MdOutlineKeyboardArrowLeft style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', width: '5vh', height: '100%', borderRadius: '100%' }} onClick={handleLeft} />
            </div>
            <div ref={refMens} style={{ scrollBehavior: 'smooth', display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between', maxWidth: '100%', overflowX: 'hidden', gap: '1.5%' }}>

                {array_name.map((data) => {
                    return <ProductCard data={data} />
                })}
            </div>
            <div style={{ position: 'absolute', top: '40%', right: '-20px' }}>
                <MdChevronRight style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', width: '5vh', height: '100%', borderRadius: '100%' }} onClick={handleRight} />
            </div>

        </div>
    )
}
