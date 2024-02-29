import ProfileList from "./profileInfo"
import React, { useState } from "react"
export default function Profile() {

    

    function renderComp(key)
    {
        switch (key) {
            case 0:
                return <ProfileList/>
            case 1:
                return <h1>{profileNavs[key]}</h1>
            case 2:
                return <h1>{profileNavs[key]}</h1>
            default:
                break;
        }
    }
    let profileNavs = ["profile", "my orders", "Addresses"]
    let [isActive, setIsActive] = useState(0)
    return (
        <div style={{ display: 'flex', width: '100%',marginTop:'5%',height:'80vh' }}>
            <div style={{ width: '20%', maxHeight: '230px', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'space-around' }}>
                {
                    profileNavs.map((title,index) => {
                        return <button onClick={()=>{setIsActive(index)}} className={isActive==index?"selected-button":"button"}>{title}</button>
                })}
            </div>
               {
                    renderComp(isActive)
               }
        </div>
    )
}