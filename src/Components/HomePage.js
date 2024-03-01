import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel.js'
import CircleCard from './cardCircle.js';
import SquareCard from './squareCard.js';
import ItemCard from './ItemCard.js';
import ProductCard from './ProductCard.js';
import { MdOutlineKeyboardArrowLeft, MdChevronRight } from "react-icons/md";
import CategoryComponent from './CategoryComponent.js';
import CarouselTwo from './CarouselTwo.js';
import CarouselThree from './CarouselThree.js';
import CarouselFour from './CarouselFour.js';
import MensCategory from './MensCategory.js';
import WomensCategory from './WomensCategory.js';
import KidsCategory from './KidsCategory.js';

export let categoryContext = React.createContext();


function HomePage() {
    const refPopular = React.useRef()
    const refDeals = React.useRef()
    const refBrand = React.useRef()
    const refCarousel = React.useRef();
    let [isActive, setIsActive] = useState(0);
    let [isMensActive, setMensActive] = useState(0)
    let [isWomensActive, setWomensActive] = useState(0)
    let [isKidsActive, setKidsActive] = useState(0)


    let carousel_component = [<Carousel />, <CarouselTwo />, <CarouselThree />, <CarouselFour />]

    let product_data = [

        {
            product_id: 2,
            brand_name: "Puma",
            brand_img: [

            ],
            brand_description: "Brand Logo Printed Relaxed Fit T-Shirt",
            brand_price: 1259,
            brand_colour: "Green and black",
            brand_size: "L",
            isAddedToCart: false
        },
        {
            product_id: 1,
            brand_name: "Apple",
            brand_img: [

            ],
            brand_description: "Apple New AirPods Max Bluetooth Headset  (Sky Blue, On the Ear)",
            brand_price: 59900,
            brand_colour: "Sky blue",
            isAddedToCart: false
        },

        {
            product_id: 3,
            brand_name: "Levis",
            brand_img: [

            ],
            brand_description: "Brand Logo Printed Pure Cotton T-shirt",
            brand_price: 1199,
            brand_colour: "Lime green and black ",
            brand_size: "L",
            icon_switch: false,
            isAddedToCart: false
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
            isAddedToCart: false
        },
        {
            product_id: 5,
            brand_name: "Puma",
            brand_img: [

            ],
            brand_description: "MMQ T7 Unisex Self-Striped Polo Collar Pure Cotton Outdoor T-shirt",
            brand_price: 4999,
            brand_colour: "Dark green",
            brand_size: "XL",
            isAddedToCart: false
        },

        {
            product_id: 6,
            brand_name: "Jack & Jones",
            brand_img: [
            ],
            brand_description: "Men Printed Cotton Slim Fit T-shirt",
            brand_price: 714,
            brand_colour: "Navy blue",
            brand_size: "L",
            isAddedToCart: false
        },
        {
            product_id: 7,
            brand_name: "Jack & Jones",
            brand_img: [
            ],
            brand_description: "Men Printed Cotton Slim Fit T-shirt",
            brand_price: 714,
            brand_colour: "Navy blue",
            brand_size: "L",
            isAddedToCart: false
        },
        {
            product_id: 8,
            brand_name: "Jack & Jones",
            brand_img: [
            ],
            brand_description: "Men Printed Cotton Slim Fit T-shirt",
            brand_price: 714,
            brand_colour: "Navy blue",
            brand_size: "L",
            isAddedToCart: false
        },
        {
            product_id: 9,
            brand_name: "Jack & Jones",
            brand_img: [
            ],
            brand_description: "Men Printed Cotton Slim Fit T-shirt",
            brand_price: 714,
            brand_colour: "Navy blue",
            brand_size: "L",
            isAddedToCart: false
        },
        {
            product_id: 10,
            brand_name: "Jack & Jones",
            brand_img: [
            ],
            brand_description: "Men Printed Cotton Slim Fit T-shirt",
            brand_price: 714,
            brand_colour: "Navy blue",
            brand_size: "L",
            isAddedToCart: false
        },
        {
            product_id: 10,
            brand_name: "Jack & Jones",
            brand_img: [
            ],
            brand_description: "Men Printed Cotton Slim Fit T-shirt",
            brand_price: 714,
            brand_colour: "Navy blue",
            brand_size: "L",
            isAddedToCart: false
        },
        {
            product_id: 10,
            brand_name: "Jack & Jones",
            brand_img: [
            ],
            brand_description: "Men Printed Cotton Slim Fit T-shirt",
            brand_price: 714,
            brand_colour: "Navy blue",
            brand_size: "L",
            isAddedToCart: false
        }, {
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
            isAddedToCart: false
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
            isAddedToCart: false
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
            icon_switch: false,
            isAddedToCart: false
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
            isAddedToCart: false
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
            isAddedToCart: false
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
            isAddedToCart: false
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
            isAddedToCart: false
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
            isAddedToCart: false
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
            isAddedToCart: false
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
            isAddedToCart: false
        },




    ]

    let mensCategory = [
        {
            title: "Tshirts",
            items: [
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
                    isAddedToCart: false
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
                    isAddedToCart: false
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
                    icon_switch: false,
                    isAddedToCart: false
                },
                {
                    product_id: 4,
                    brand_name: "Levis",
                    brand_img: [
                        "./mensTshirts/tommy18991.png",
                    ],
                    brand_description: "Brand Logo Printed Pure Cotton T-shirt",
                    brand_price: 1199,
                    brand_colour: "Fluorescent green ",
                    brand_size: "L",
                    isAddedToCart: false
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
                    isAddedToCart: false
                },

                {
                    product_id: 6,
                    brand_name: "Jack & Jones",
                    brand_img: [
                        "./mensTshirts/tommy25991.png",
                    ],
                    brand_description: "Men Printed Cotton Slim Fit T-shirt",
                    brand_price: 714,
                    brand_colour: "Navy blue",
                    brand_size: "L",
                    isAddedToCart: false
                },
                {
                    product_id: 7,
                    brand_name: "Tommy hilfiger",
                    brand_img: [
                        "./mensTshirts/tommy11991.png",
                    ],
                    brand_description: "Pure Cotton Colourblocked Polo Collar Casual T-shirt",
                    brand_price: 1199,
                    brand_colour: "Blue",
                    brand_size: "L",
                    isAddedToCart: false
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
                    isAddedToCart: false
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
                    isAddedToCart: false
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
                    isAddedToCart: false
                },
                {
                    product_id: 10,
                    brand_name: "Levis",
                    brand_img: [
                        "./mensTshirts/levis20791.png",
                    ],
                    brand_description: "Power Colourblocked Drop-Shoulder Sleeves Relaxed Fit Pure Cotton T-shirt",
                    brand_price: 2079,
                    brand_colour: "Orange and black",
                    brand_size: "L",
                    isAddedToCart: false
                },
                {
                    product_id: 10,
                    brand_name: "US Polo",
                    brand_img: [
                        "./mensTshirts/polo14391.png",
                    ],
                    brand_description: "Power Colourblocked Drop-Shoulder Sleeves Relaxed Fit Pure Cotton T-shirt",
                    brand_price: 1439,
                    brand_colour: "Orange and black",
                    brand_size: "L",
                    isAddedToCart: false
                },
            ]
        },
        {
            title: "Casual shirts",
            items: []
        },
        {
            title: "Jackets",
            items: []
        },
        {
            title: "Casual trousers",
            items: []
        },
        {
            title: "Shorts",
            items: []
        },
        {
            title: "Jeans",
            items: []
        }]
    let WomenCategory = [
        {
            title: "Kurtas & kurtis",
            items: []
        },
        {
            title: "Sarees",
            items: []
        },
        {
            title: "Topwear",
            items: []
        },
        {
            title: "Women's jeans",
            items: []
        },
        {
            title: "Lehenga Cholis",
            items: []
        },
        {
            title: "Women's Dupattas",
            items: []
        }]
    let kidsCategory = [
        {
            title: "Tshirts",
            items: []
        },
        {
            title: "Kid's ethnic",
            items: []
        },
        {
            title: "Jackets",
            items: []
        },
        {
            title: "Tops",
            items: []
        },
        {
            title: "Shots",
            items: []
        },
        {
            title: "Jeans",
            items: []
        }]


    let popular_products = [
        {
            product_id: 7,
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
            isAddedToCart: false
        },
        {
            product_id: 8,
            brand_img: [
                "./images/book4.jpg"
            ],
            brand_description: "Einstein | Book by Walter Isaacson",
            brand_price: 534,
        },
        {
            product_id: 1,
            brand_name: "Apple",
            brand_img: [
                "./images/iphone.png"
            ],
            brand_description: "Apple New AirPods Max Bluetooth Headset  (Sky Blue, On the Ear)",
            brand_price: 59900,
            brand_colour: "Sky blue",
            isAddedToCart: false
        },
        {
            product_id: 2,
            brand_name: "Sony",
            brand_img: [
                "./images/camera.png"
            ],
            brand_description: "Sony - Alpha 7 IV Full-frame Mirrorless Interchangeable Lens Camera with SEL2870 Lens - Black",
            brand_price: 280000,
            brand_colour: "black",
            isAddedToCart: false
        },
        {
            product_id: 2,
            brand_img: [
                "./images/watch1.png"
            ],
            brand_description: "Diamond Earrings In 18Kt Yellow Gold (10.686 gram) with Diamonds (0.6900 Ct)",
            brand_price: 168500,
        },
        {
            product_id: 3,
            brand_name: "Whirlpool",
            brand_img: [
                "./images/washing.png"
            ],
            brand_description: "Xpert Care 7kg 5 Star Front-Load Washing Machine with Ozone Air Refresh Technology and In-Built Heater",
            brand_price: 36540,
            brand_colour: "black",
            isAddedToCart: false
        },
        {
            product_id: 4,
            brand_name: "Apple",
            brand_img: [
                "./images/mac.png"
            ],
            brand_description: "13-inch MacBook Pro",
            brand_price: 114312,
            brand_colour: "Space grey",
            isAddedToCart: false
        },
        {
            product_id: 5,
            brand_name: "Samsung",
            brand_img: [
                "./images/tv.png"
            ],
            brand_description: "Samsung - 65 inch Class 9 Series LED 4K UHD Smart Tizen TV",
            brand_price: 120000,
            brand_colour: "black",
            isAddedToCart: false
        },

        {
            product_id: 6,
            brand_name: "Apple",
            brand_img: [
                "./images/tablet.png"
            ],
            brand_description: "Apple iPad Pro 11 (2020) WiFi 512 GB Silver Tablet",
            brand_price: 67000,
            brand_colour: "gold",
            isAddedToCart: false
        },
    ]

    let deals_day = [
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
            isAddedToCart: false
        },
        {
            product_id: 5,
            brand_name: "Adidas",
            brand_img: [
                "./images/shoes1.png"
            ],
            brand_description: "Men Woven Design Apexo Walking Shoes",
            brand_price: 2149,
            brand_colour: "Collegiate Navy / Cloud White",
            brand_size: "XL",
            isAddedToCart: false
        },
        {
            product_id: 5,
            brand_name: "Indo Era",
            brand_img: [
                "./images/kurta1.png"
            ],
            brand_description: "Floral Embroidered Regular Kurta with Trousers & Dupatta",
            brand_price: 1699,
            brand_colour: "Collegiate Navy / Cloud White",
            brand_size: "XL",
            isAddedToCart: false
        },
        {
            product_id: 3,
            brand_img: [
                "./images/book3.jpg"
            ],
            brand_description: "Einstein | Book by Walter Isaacson",
            brand_price: 234,
        },
        {
            product_id: 5,
            brand_name: "Fogg",
            brand_img: [
                "./images/perfume.png"
            ],
            brand_description: "Women Scent I Am Queen Long-Lasting Eau De Parfum 100 ml",
            brand_price: 325,
            isAddedToCart: false
        },
        {
            product_id: 5,
            brand_name: "Levis",
            brand_img: [
                "./images/jackets1.png"
            ],
            brand_description: "Pure Cotton Spread Collar Solid Denim Jacket",
            brand_price: 3293,
            brand_colour: "Collegiate Navy / Cloud White",
            brand_size: "XL",
            isAddedToCart: false
        },

    ]




    function handleLeft(e) {
        refPopular.current.scrollLeft -= refPopular.current.clientWidth
    }

    function handleRight(e) {
        refPopular.current.scrollLeft += refPopular.current.clientWidth
    }

    function handleDealsLeft(e) {
        refDeals.current.scrollLeft -= refDeals.current.clientWidth
    }

    function handleDealsRight(e) {
        refDeals.current.scrollLeft += refDeals.current.clientWidth
    }

    function handleBrandLeft(e) {
        refBrand.current.scrollLeft -= refBrand.current.clientWidth
    }

    function handleBrandRight(e) {
        refBrand.current.scrollLeft += refBrand.current.clientWidth
    }

    let category_data = [
        {
            category: 'Electronics',
            image: '"./images/tablet.png',
            products: [
                {
                    product_id: 1,
                    brand_name: "Apple",
                    brand_img: [
                        "./images/iphone.png"
                    ],
                    brand_description: "Apple New AirPods Max Bluetooth Headset  (Sky Blue, On the Ear)",
                    brand_price: 59900,
                    brand_colour: "Sky blue",
                    isAddedToCart: false
                },
                {
                    product_id: 2,
                    brand_name: "Sony",
                    brand_img: [
                        "./images/camera.png"
                    ],
                    brand_description: "Sony - Alpha 7 IV Full-frame Mirrorless Interchangeable Lens Camera with SEL2870 Lens - Black",
                    brand_price: 280000,
                    brand_colour: "black",
                    isAddedToCart: false
                },
                {
                    product_id: 3,
                    brand_name: "Whirlpool",
                    brand_img: [
                        "./images/washing.png"
                    ],
                    brand_description: "Xpert Care 7kg 5 Star Front-Load Washing Machine with Ozone Air Refresh Technology and In-Built Heater",
                    brand_price: 36540,
                    brand_colour: "black",
                    isAddedToCart: false
                },
                {
                    product_id: 4,
                    brand_name: "Apple",
                    brand_img: [
                        "./images/mac.png"
                    ],
                    brand_description: "13-inch MacBook Pro",
                    brand_price: 114312,
                    brand_colour: "Space grey",
                    isAddedToCart: false
                },
                {
                    product_id: 5,
                    brand_name: "Samsung",
                    brand_img: [
                        "./images/tv.png"
                    ],
                    brand_description: "Samsung - 65 inch Class 9 Series LED 4K UHD Smart Tizen TV",
                    brand_price: 120000,
                    brand_colour: "black",
                    isAddedToCart: false
                },
                {
                    product_id: 6,
                    brand_name: "Apple",
                    brand_img: [
                        "./images/tablet.png"
                    ],
                    brand_description: "Apple iPad Pro 11 (2020) WiFi 512 GB Silver Tablet",
                    brand_price: 67000,
                    brand_colour: "gold",
                    isAddedToCart: false
                },
            ]
        },
        {
            category: 'Books',
            image: '"./images/history-book.png',
            products: [
                {
                    product_id: 1,
                    brand_img: [
                        "./images/book1.jpg"
                    ],
                    brand_description: "Einstein | Book by Walter Isaacson",
                    brand_price: 268,
                },
                {
                    product_id: 2,
                    brand_img: [
                        "./images/book2.jpg"
                    ],
                    brand_description: "Einstein | Book by Walter Isaacson",
                    brand_price: 456,
                },
                {
                    product_id: 3,
                    brand_img: [
                        "./images/book3.jpg"
                    ],
                    brand_description: "Einstein | Book by Walter Isaacson",
                    brand_price: 234,
                },
                {
                    product_id: 4,
                    brand_img: [
                        "./images/book4.jpg"
                    ],
                    brand_description: "Einstein | Book by Walter Isaacson",
                    brand_price: 534,
                },
                {
                    product_id: 5,
                    brand_img: [
                        "./images/book5.jpg"
                    ],
                    brand_description: "Einstein | Book by Walter Isaacson",
                    brand_price: 678,
                },
                {
                    product_id: 6,
                    brand_img: [
                        "./images/book6.jpg"
                    ],
                    brand_description: "Einstein | Book by Walter Isaacson",
                    brand_price: 235,
                },
            ]
        },
        {
            category: 'Jewelry',
            image: '"./images/diamond.png',
            products: [
                {
                    product_id: 1,
                    brand_img: [
                        "./images/gold1.png"
                    ],
                    brand_description: "Diamond Earrings In 18Kt Yellow Gold (10.686 gram)",
                    brand_price: 96000,
                },
                {
                    product_id: 2,
                    brand_img: [
                        "./images/gold2.png"
                    ],
                    brand_description: "Diamond Earrings In 18Kt Yellow Gold (10.686 gram) with Diamonds (0.6900 Ct)",
                    brand_price: 148500,
                },
                {
                    product_id: 2,
                    brand_img: [
                        "./images/gold3.png"
                    ],
                    brand_description: "Diamond Earrings In 18Kt Yellow Gold (10.686 gram) with Diamonds (0.6900 Ct)",
                    brand_price: 497000,
                },
                {
                    product_id: 2,
                    brand_img: [
                        "./images/gold4.png"
                    ],
                    brand_description: "Diamond Earrings In 18Kt Yellow Gold (10.686 gram) with Diamonds (0.6900 Ct)",
                    brand_price: 258500,
                },
                {
                    product_id: 2,
                    brand_img: [
                        "./images/gold5.png"
                    ],
                    brand_description: "Diamond Earrings In 18Kt Yellow Gold (10.686 gram) with Diamonds (0.6900 Ct)",
                    brand_price: 358500,
                },
                {
                    product_id: 2,
                    brand_img: [
                        "./images/gold6.png"
                    ],
                    brand_description: "Diamond Earrings In 18Kt Yellow Gold (10.686 gram) with Diamonds (0.6900 Ct)",
                    brand_price: 168500,
                },
            ]
        },
        {
            category: "Sports",
            image: "./images/sports.png",
            products: []
        },
        {
            category: "Watches",
            image: "./images/wrist-watch.png",
            products: [
                {
                    product_id: 2,
                    brand_img: [
                        "./images/watch1.png"
                    ],
                    brand_description: "Diamond Earrings In 18Kt Yellow Gold (10.686 gram) with Diamonds (0.6900 Ct)",
                    brand_price: 168500,
                },
                {
                    product_id: 2,
                    brand_img: [
                        "./images/watch2.png"
                    ],
                    brand_description: "Diamond Earrings In 18Kt Yellow Gold (10.686 gram) with Diamonds (0.6900 Ct)",
                    brand_price: 168500,
                },
            ]
        },
        {
            category: "Furniture",
            image: "./images/sofa.png",
            products: []
        },
        {
            category: "Games",
            image: "./images/joystick.png",
            products: []
        },
        {
            category: "Footware",
            image: "./images/boots.png",
            products: []
        },
        {
            category: "Cosmetics",
            image: "./images/cosmetics.png",
            products: []
        },
        {
            category: "Fashion",
            image: "./images/male-clothes.png",
            products: []
        },
        {
            category: "Hardware",
            image: "./images/cpu.png",
            products: []
        }
    ]




    function handleCarousel() {
        refCarousel.current.scrollLeft += refCarousel.current.clientWidth
    }

    let Nav = useNavigate()

    function handleClick() {
        Nav('/mens/tshirts')
    }

    function categoryComponent(val) {
        return <CategoryComponent title={category_data[val].category} products={category_data[val].products} />
    }

    let styleObj = {
        textAlign: 'start', fontFamily: 'poppins', letterSpacing: '2px', fontSize: '30px'
    }

    return (
        <div style={{ marginTop: '4%' }}>
            <div onClick={handleCarousel} ref={refCarousel} style={{ scrollBehavior: 'smooth', maxWidth: '100vw', flexWrap: 'nowrap', display: 'flex', overflowX: 'hidden', marginLeft: '2%', marginRight: '2%', justifyContent: 'space-between', gap: '0%' }}>
                {
                    carousel_component.map((item) => item)
                }
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontFamily: 'poppins', paddingLeft: '2%' }}>Top category</h1>
                <p style={{ fontFamily: 'Hammersmith One', fontSize: '20px', paddingRight: '2%' }}>See All</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '18vh', width: '100%', flexWrap: 'wrap' }}>
                {
                    category_data.map((item, index) => {
                        return <categoryContext.Provider value={[isActive, setIsActive]}><CircleCard category={item.category} image={item.image} index={index} /></categoryContext.Provider>
                    })
                }
            </div>
            <div style={{ maxWidth: '100%', marginRight: '2%', marginLeft: '2%', marginTop: '3vh', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', padding: '2%' }}>
                {categoryComponent(isActive)}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontFamily: 'poppins', paddingLeft: '2%' }}>Popular Products</h1>

            </div>
            <div style={{ position: 'relative', maxWidth: '100%', marginLeft: '2%', marginRight: '1%' }}>
                <div style={{ position: 'absolute', top: '40%', left: '-20px', zIndex: '1' }}>
                    <MdOutlineKeyboardArrowLeft style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', width: '5vh', height: '100%', borderRadius: '100%' }} onClick={handleLeft} />
                </div>
                <div ref={refPopular} style={{ scrollBehavior: 'smooth', display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between', maxWidth: '100%', overflowX: 'hidden', gap: '1.5%' }}>

                    {popular_products.map((data) => {
                        return <ProductCard data={data} />
                    })}
                </div>
                <div style={{ position: 'absolute', top: '40%', right: '-20px' }}>
                    <MdChevronRight style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', width: '5vh', height: '100%', borderRadius: '100%' }} onClick={handleRight} />
                </div>

            </div>


            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontFamily: 'poppins', paddingLeft: '2%' }}>Deals of the Day</h1>
            </div>
            <div style={{ position: 'relative', maxWidth: '100%', marginLeft: '2%', marginRight: '1%' }}>
                <div style={{ position: 'absolute', top: '40%', left: '-20px', zIndex: '1' }}>
                    <MdOutlineKeyboardArrowLeft style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', width: '5vh', height: '100%', borderRadius: '100%' }} onClick={handleDealsLeft} />
                </div>
                <div ref={refDeals} style={{ scrollBehavior: 'smooth', display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between', maxWidth: '100%', overflowX: 'hidden', gap: '1.5%' }}>

                    {deals_day.map((data) => {
                        return <ProductCard data={data} />
                    })}
                </div>
                <div style={{ position: 'absolute', top: '40%', right: '-20px' }}>
                    <MdChevronRight style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', width: '5vh', height: '100%', borderRadius: '100%' }} onClick={handleDealsRight} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontFamily: 'poppins', paddingLeft: '2%' }}>Top brands</h1>
            </div>
            <div style={{ position: 'relative', maxWidth: '100%', marginLeft: '2%', marginRight: '1%' }}>
                <div style={{ position: 'absolute', top: '40%', left: '-20px', zIndex: '1' }}>
                    <MdOutlineKeyboardArrowLeft style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', width: '5vh', height: '100%', borderRadius: '100%' }} onClick={handleBrandLeft} />
                </div>
                <div ref={refBrand} style={{ scrollBehavior: 'smooth', display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between', maxWidth: '100%', overflowX: 'hidden', gap: '1.6%' }}>
                    <SquareCard brand="./images/levis.jpg" image=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDkO53QaPLJQurJXctCzpSpTYUx4-95iokw&usqp=CAU" />
                    <SquareCard brand="./images/Hm.jpg" image="./images/H_m.png" />
                    <SquareCard brand="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tommy_Hilfiger_Logo.png/2560px-Tommy_Hilfiger_Logo.png" image="./images/tommy_hilfiger.png" />
                    <SquareCard brand="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" image="./images/zara.png" />
                    <SquareCard brand="https://www.marketing91.com/wp-content/uploads/2019/05/SWOT-Analysis-of-Peter-England-1.jpg" image="./images/peter_england.png" />
                    <SquareCard brand="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" image="./images/puma.png" />
                    <SquareCard brand="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" image="./images/adidas.png" />
                    <SquareCard brand="https://licenceindia.s3.ap-south-1.amazonaws.com/s3fs-public/2020-08/WROGN.jpg" image="./images/wrogan.png" />
                    <SquareCard brand="https://logos-world.net/wp-content/uploads/2023/01/U.S.-Polo-Assn-Logo.png" image="./images/polo.png" />
                    <SquareCard brand="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Jack_%26_Jones_logo.svg/2560px-Jack_%26_Jones_logo.svg.png" image="./images/jack_jones.png" />
                    <SquareCard brand="https://dtbtob4osa700.cloudfront.net/BrandsImages/09122021141508482_brlo.png" image="./images/roadstar.png" />
                    <SquareCard brand="https://1000logos.net/wp-content/uploads/2020/08/Jockey-Logo-1962.png" image="./images/jockey.png" />
                    <SquareCard brand="https://1000logos.net/wp-content/uploads/2020/05/BlackBerry-logo.jpg" image="./images/blackberry.png" />
                    <SquareCard brand="https://pngimg.com/d/gucci_PNG17.png" image="./images/gucci.png" />

                </div>
                <div style={{ position: 'absolute', top: '40%', right: '-20px' }}>
                    <MdChevronRight style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', width: '5vh', height: '100%', borderRadius: '100%' }} onClick={handleBrandRight} />
                </div>
            </div>



            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontFamily: 'poppins', paddingLeft: '2%' }}>Men's category</h1>
            </div>
            <div style={{ maxWidth: '100%', marginLeft: '2%', }}>
                {
                    mensCategory.map((item, index) => {
                        return (
                            <button onClick={() => { setMensActive(index) }} style={isMensActive == index ? { width: '10%', height: '5vh', borderRadius: '5px', border: '0px', marginRight: '2%', cursor: 'pointer', backgroundColor: '#0d6efd', color: 'white' } : { width: '10%', height: '5vh', borderRadius: '5px', border: '0px', marginRight: '2%', cursor: 'pointer', backgroundColor: '' }}>{item.title}</button>
                        )
                    })
                }
            </div>
            <div style={{ maxWidth: '100%', marginRight: '2%', marginLeft: '2%', marginTop: '3vh', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                <MensCategory array_name={mensCategory[isMensActive].items} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontFamily: 'poppins', paddingLeft: '2%' }}>Women's category</h1>
            </div>
            <div style={{ maxWidth: '100%', marginLeft: '2%' }}>
                {
                    WomenCategory.map((item, index) => {
                        return (
                            <button onClick={() => { setWomensActive(index) }} style={isWomensActive == index ? { width: '10%', height: '5vh', borderRadius: '5px', border: '0px', marginRight: '2%', cursor: 'pointer', backgroundColor: '#0d6efd', color: 'white' } : { width: '10%', height: '5vh', borderRadius: '5px', border: '0px', marginRight: '2%', cursor: 'pointer', backgroundColor: '' }}>{item.title}</button>
                        )
                    })
                }
            </div>
            <div style={{ maxWidth: '100%', marginLeft: '2%' }}>
                <WomensCategory title={WomenCategory[isWomensActive].items} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontFamily: 'poppins', paddingLeft: '2%' }}>Kid's category</h1>
            </div>
            <div style={{ maxWidth: '100%', marginLeft: '2%' }}>
                {
                    kidsCategory.map((item, index) => {
                        return (
                            <button onClick={() => { setKidsActive(index) }} style={isKidsActive == index ? { width: '10%', height: '5vh', borderRadius: '5px', border: '0px', marginRight: '2%', cursor: 'pointer', backgroundColor: '#0d6efd', color: 'white' } : { width: '10%', height: '5vh', borderRadius: '5px', border: '0px', marginRight: '2%', cursor: 'pointer', backgroundColor: '' }}>{item.title}</button>
                        )
                    })
                }
            </div>
            <div style={{ maxWidth: '100%', marginLeft: '2%' }}>
                <KidsCategory title={kidsCategory[isKidsActive].items} />
            </div>

        </div>

    )
}

export default HomePage
















