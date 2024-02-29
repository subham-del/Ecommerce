import { BiUser } from 'react-icons/bi'
import { MdAlternateEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
export default function ProfileInfo() {

    let inputele = {
        width: '100%',height:'95%',outline:'none',border:'none',paddingLeft:'3%',borderRadius:'0px 5px 5px 0px',backgroundColor: '#ECEFF1'
    }

    let iconstyle = {
        fontSize:'22px',backgroundColor: '#ECEFF1',height:'100%',borderRadius:'5px 0px 0px 5px',paddingLeft:'1%'
    }
    let outerDiv = {
        height: '10%', width: '100%', display: 'flex'
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%', width: '35%', padding: '1%', height: '70%',fontFamily:'Hammersmith One' }}>
            <p>Name</p>
            <div style={outerDiv}>
                <div style={{ display: 'flex', height: '100%', width: '50%',alignItems:'center' }}>
                    <BiUser style={iconstyle}/>
                    <input style={inputele} type="text" placeholder="First Name" />
                </div>
                <div style={{ width: '50%', height: '100%',marginLeft:'2%' }}>
                    <input style={{height:'95%',backgroundColor: '#ECEFF1',borderRadius:'5px',outline:'none',border:'none',paddingLeft:'2%',width:'100%'}} type="text" placeholder="Last Name" />
                </div>
            </div>
            <p>Email</p>
            <div style={outerDiv}>
                <div style={{ display: 'flex', height: '100%', width: '50%',alignItems:'center' }}>
                    <MdAlternateEmail style={iconstyle}/>
                    <input style={inputele} type="text" placeholder="Email" />
                </div>
            </div>
            <p>Phone number</p>
            <div style={outerDiv}>
                <div style={{ display: 'flex', height: '100%', width: '50%',alignItems:'center' }}>
                    <IoPhonePortraitOutline style={iconstyle}/>
                    <input style={inputele} type="text" placeholder="Phone number" />
                </div>
            </div>
            <p>Address</p>
            <div style={{height:'15%'}}>
                <textarea style={{width:'100%',height:'100%',backgroundColor: '#ECEFF1',outline:'none',border:'none',borderRadius:'5px'}}></textarea>
            </div>
        </div>
    )
}