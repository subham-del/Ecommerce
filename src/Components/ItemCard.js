import React from 'react'

function ItemCard(props){
    let [applyScale,setScale] = React.useState(false)   
   
    let styleObj = {
        backgroundImage:`url(${props.obj.itemImage})`,
        width:'100%',
        height:'270px',
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        backgroundPosition:'center',
        cursor:'pointer',
        backgroundColor:'white',
        borderRadius:'5px'
    }
    let outerDiv={
        width:'250px',
        borderRadius:'5px',
        boxShadow:'0 .5rem 1rem rgba(0,0,0,.15)',
        transform:applyScale?'scale(1.1)':'none',
        transition:'transform 1s',
        margin:'10px'
    }
   
    return(
        <div>
            <div  onMouseOver={()=>{setScale(true)}} onMouseOut={()=>{setScale(false)}} style={outerDiv}>
                <div style={styleObj}></div> 
                <div style={{position:'relative',padding:'0px',lineHeight:'0%',height:'20px'}}>
                    <h2 style={{textAlign:'center',fontFamily:'poppins',fontSize:'25px'}}>{props.obj.CategoryName}</h2>
                </div>
            </div>
        </div>  
    )
}

export default ItemCard