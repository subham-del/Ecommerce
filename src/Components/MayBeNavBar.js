import { useLocation } from "react-router-dom"
import React, { useEffect } from "react"
export default function MayBeNavBar({ children }) {
    let location = useLocation()
    let [showNavBar, setShowNavBar] = React.useState(false)
    React.useEffect(() => {
        if (location.pathname === "/login")
            setShowNavBar(false)
        else
            setShowNavBar(true)
    }, [location])
    return (
        <div>{showNavBar && children}</div>
    )
}