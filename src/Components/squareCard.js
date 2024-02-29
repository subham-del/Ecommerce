function SquareCard(props){
    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',cursor:"pointer",marginTop:'15px'}}>
            <div style={{backgroundColor:'white',height:'200px',width:'200px',marginRight:'10px',border:'0px',borderRadius:'10px',backgroundImage:`url(${props.image})`,backgroundSize:'contain',backgroundRepeat:"no-repeat",backgroundPosition:'center',boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",}}>
  
            </div>
            <div style={{marginTop:'5%',marginBottom:'20%',width:'100px',height:'40px',backgroundImage:`url(${props.brand})`,backgroundSize:'contain',backgroundRepeat:"no-repeat"}}>
            
            </div>
        </div>
    )
}

export default SquareCard

