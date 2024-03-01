import React from "react";
export default function CarouselFour() {
    return (
        <div style={{ minWidth: '100%', height: '60vh', backgroundImage: 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)', borderRadius: '10px', border: '0px' }}>
            <div style={{ position: 'relative', width: '100%', borderRadius: '10px', border: '0px', height: '100%', backgroundImage: `url(./images/iphone.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                <button style={{ position: 'absolute', bottom: '10%', left: '5%', width: '13%', height: '9%', borderRadius: '5px', border: '0px', backgroundColor: 'black', color: 'white' }}>Shop now</button>
            </div>
        </div>
    )
}