import React from 'react'
import { FaApple } from "react-icons/fa";
function Carousel() {

    return (
        <div style={{ minWidth: '100%', height: '60vh', backgroundImage: 'linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)', borderRadius: '10px', border: '0px' }}>
            <div style={{ position: 'relative', width: '100%', borderRadius: '10px', border: '0px', height: '100%', backgroundImage: `url(http://localhost:3000/ecommerce/images/iphone.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                <button style={{ position: 'absolute', bottom: '10%', left: '5%', width: '13%', height: '9%', borderRadius: '5px', border: '0px', backgroundColor: 'black', color: 'white' }}>Shop now</button>
                <div style={{ color: 'white', position: 'absolute', top: '0%', left: '5%', fontFamily: 'poppins',display:'flex',justifyContent:'center',alignItems:'center' }}>
                    <FaApple style={{ fontSize: '45px' }} />
                    <h2 style={{marginTop:'20%',fontSize:'40px'}}>iPhone 15</h2>
                </div>
                <h1 style={{ color: 'white', position: 'absolute', top: '18%', left: '5.5%', fontSize: '25px', fontFamily: 'poppins' }}>The Biggest iPhone Sale of the Year</h1>
                <h1 style={{ color: 'white', position: 'absolute', top: '26%', left: '5.5%', fontSize: '25px', fontFamily: 'poppins' }}>Get 25% off on Protect and with AppleCare Services</h1>
                <h1 style={{ color: 'white', position: 'absolute', top: '35%', left: '5.5%', fontSize: '25px',fontFamily:'monospace' }}>&#8377;<span style={{textDecoration:'line-through',fontFamily:'sans-serif'}}>1,00,000</span><span>&nbsp;&#8377;79,999</span></h1>

            </div>
        </div>
    )
}

export default Carousel