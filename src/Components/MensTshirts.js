import React, { useState } from 'react'
import ProductCard from "./ProductCard"
import Navbar from "./Navbar"


let product_data
function MensTshirts() {

    product_data = [
        {
            product_id: 1,
            brand_name: "Tommy hilfiger",
            brand_img: [
                "./mensTshirts/tommy1439.png",
                "./mensTshirts/tommy14391.png",
                "./mensTshirts/tommy14392.png",
                "./mensTshirts/tommy14393.png"
                ],
            brand_description: "Men Brand Logo Printed Pure Cotton T-shirt",
            brand_price: 1439,
            brand_colour: "Black and white",
            brand_size: "L",
            isAddedToCart:false
        },

        {
            product_id: 2,
            brand_name: "Puma",
            brand_img: [
                "./mensTshirts/puma1259.png",
                "./mensTshirts/puma12591.png",
                "./mensTshirts/puma12592.png",
                "./mensTshirts/puma12593.png"
                ],
            brand_description: "Brand Logo Printed Relaxed Fit T-Shirt",
            brand_price: 1259,
            brand_colour: "Green and black",
            brand_size: "L",
            isAddedToCart:false
        },
        {
            product_id: 3,
            brand_name: "Levis",
            brand_img: [
                "./mensTshirts/levis1199.png",
                "./mensTshirts/levis11991.png",
                "./mensTshirts/levis11992.png",
                "./mensTshirts/levis11993.png"
                ],
            brand_description: "Brand Logo Printed Pure Cotton T-shirt",
            brand_price: 1199,
            brand_colour: "Lime green and black ",
            brand_size: "L",
            icon_switch:false,
            isAddedToCart:false
        },
        {
            product_id: 4,
            brand_name: "Levis",
            brand_img: [

                ],
            brand_description: "Brand Logo Printed Pure Cotton T-shirt",
            brand_price: 1199,
            brand_colour: "Fluorescent green ",
            brand_size: "L",
            isAddedToCart:false
        },
        {
            product_id: 5,
            brand_name: "Puma",
            brand_img: [
                    "./mensTshirts/puma4999.png",
                    "./mensTshirts/puma49991.png",
                    "./mensTshirts/puma49992.png",
                    "./mensTshirts/puma49993.png"
                ],
            brand_description: "MMQ T7 Unisex Self-Striped Polo Collar Pure Cotton Outdoor T-shirt",
            brand_price: 4999,
            brand_colour: "Dark green",
            brand_size: "XL",
            isAddedToCart:false
        },

        {
            product_id: 6,
            brand_name: "Jack & Jones",
            brand_img: [
                "https://o.remove.bg/downloads/01c6d92d-d17d-46f2-8ccd-b0c0b8a6fd45/09f2a02f-611b-4ef5-8da1-8be23440236d1672823867911Tshirts1-removebg-preview.png",
                "https://o.remove.bg/downloads/67991458-4f37-44cb-a27d-e6d3edaa41aa/b8e4ef7d-6883-4321-861a-673fc01487e91672823867886Tshirts2-removebg-preview.png",
                "https://o.remove.bg/downloads/4da21a75-f183-4b91-8c90-880a8d268c58/13aceaaa-6687-4f6b-bc74-6b81b68b004b1672823867927Tshirts4-removebg-preview.png",
                "https://o.remove.bg/downloads/648ae930-f2d7-4fcc-9a6a-708f14c562e1/e2c86271-a404-43e7-9255-967212dd88d21672823867903Tshirts5-removebg-preview.png"
            ],
            brand_description: "Men Printed Cotton Slim Fit T-shirt",
            brand_price: 714,
            brand_colour: "Navy blue",
            brand_size: "L",
            isAddedToCart:false
        },
        {
            product_id: 7,
            brand_name: "Peter England",
            brand_img: [
                "https://o.remove.bg/downloads/52201c52-a8a6-469c-8100-01d160196974/f3ba8eeb-380e-4e4c-80d2-87e7051c1cc71691386970382-Peter-England-Men-Tshirts-9991691386969969-1-removebg-preview.png",
                "https://o.remove.bg/downloads/71efa75b-436d-4e36-83a7-d3e471be2952/c60ca0e9-233b-4656-b4c4-534abe35ac5c1691386970342-Peter-England-Men-Tshirts-9991691386969969-3-removebg-preview.png",
                "https://o.remove.bg/downloads/c1cfe3b7-9c16-4510-8ce7-d1c8bbb21b2a/4449255e-264b-4423-8b5a-03ba6daaab271691386970322-Peter-England-Men-Tshirts-9991691386969969-4-removebg-preview.png",
                "https://o.remove.bg/downloads/f380e7c0-5e7e-4742-9553-11368237e330/721a19cd-4c00-4e87-9fad-7d4e8fa6ad131691386970305-Peter-England-Men-Tshirts-9991691386969969-5-removebg-preview.png"
            ],
            brand_description: "Pure Cotton Colourblocked Polo Collar Casual T-shirt",
            brand_price: 1499,
            brand_colour: "Blue",
            brand_size: "L",
            isAddedToCart:false
        },
        {
            product_id: 8,
            brand_name: "Tommy hilfiger",
            brand_img: [
                "./mensTshirts/tommy1799.png",
                "./mensTshirts/tommy17991.png",
                "./mensTshirts/tommy17992.png",
                "./mensTshirts/tommy17993.png"
               ],
            brand_description: "HILFIGER STRIPE T-SHIRT",
            brand_price: 1799,
            brand_colour: "Grey Heather",
            brand_size: "XL",
            isAddedToCart:false
        },

        {
            product_id: 9,
            brand_name: "Tommy hilfiger",
            brand_img: [
                "./mensTshirts/tommy1600.png",
                "./mensTshirts/tommy16001.png",
                "./mensTshirts/tommy16002.png",
                "./mensTshirts/tommy16003.png"
                ],
            brand_description: "Men Yellow Brand Logo Striped T-shirt",
            brand_price: 1600,
            brand_colour: "Yellow",
            brand_size: "L",
            isAddedToCart:false
        },
        {
            product_id: 10,
            brand_name: "Puma",
            brand_img: [
                "./mensTshirts/puma1349.png",
                "./mensTshirts/puma13491.png",
                "./mensTshirts/puma13492.png",
                "./mensTshirts/puma13493.png"
              ],
            brand_description: "Power Colourblocked Drop-Shoulder Sleeves Relaxed Fit Pure Cotton T-shirt",
            brand_price: 1349,
            brand_colour: "Orange and black",
            brand_size: "L",
            isAddedToCart:false
        },



    ]


    let [updateFilterarray, setFilterArray] = useState([])
    let [array_name, setArrayName] = React.useState(product_data)
    let [cartCount, setCartCount] = React.useState(0)

    function handleClick(e) {
        if (e.target.checked) {
            setFilterArray(updateFilterarray = updateFilterarray.concat(product_data.filter((data) => data.brand_name === e.target.id)))
            setArrayName(updateFilterarray)
        }
        else {
            setFilterArray(updateFilterarray = updateFilterarray.filter((data) => data.brand_name !== e.target.id))
            setArrayName(updateFilterarray)
        }

        if (updateFilterarray.length === 0)
            setArrayName(product_data)
    }
  

    return (
        <div style={{marginTop:'3%'}}>
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ width: '100%'}}>
                    <h1 style={{marginLeft:'3%',fontFamily: 'Hammersmith One,IBM Plex Sans',fontSize:'25px',marginTop:'2%'}}>products</h1>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',margin:'2%' }}>
                        {array_name.map((data) => {
                            return <ProductCard data={data} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MensTshirts      
export {product_data}