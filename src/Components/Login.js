import React from 'react'
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi'
import { loginContext } from '../App'
import { useNavigate } from 'react-router-dom'
function LoginPg() {
    let [data, getData] = React.useState('')
    let [password, getPassword] = React.useState('')
    let [applyTransform, setTransform] = React.useState(false)
    let [applyTransition, setTransition] = React.useState(false)
    let [applyHeight, setHeight] = React.useState(false)
    let [applyFont, setFont] = React.useState(false)
    let [applyHeightPswd, setHeightPswd] = React.useState(false)
    let [applyFontPswd, setFontPswd] = React.useState(false)
    let [applyTransformPswd, setTransformPswd] = React.useState(false)
    let [applyTransitionPswd, setTransitionPswd] = React.useState(false)
    let [isMarginText, setMarginText] = React.useState(false)
    let [isMarginPswd, setMarginPswd] = React.useState(false)
    let [showIcon, setIcon] = React.useState(false)
    let [errMsg, setErrUser] = React.useState('')
    let [errPassword, setErrPswd] = React.useState('')
    let [toggleIcon, setToggleIcon] = React.useState(true)
    let [applyTransformDiv, setTranisitionDIv] = React.useState(false)
    let [labelTransition, setLabelTransition] = React.useState(false)
    let [pswdFieldTransition, setPswdFieldTransition] = React.useState(false)
    let [usernameFieldTransition, setUsernameFieldTransition] = React.useState(false)
    let [buttonTransition, setButtonTransition] = React.useState(false)
    let [applyOpacity, setOpacity] = React.useState(false)

   
    let [isLogin,setLogin,user,setUser] = React.useContext(loginContext)
    React.useEffect(() => {
        setTranisitionDIv(true)
        setLabelTransition(true)
        setPswdFieldTransition(true)
        setUsernameFieldTransition(true)
        setButtonTransition(true)
        setOpacity(true)
    }, [])

    let inputRef = React.createRef()
    let redirect = useNavigate()
    function handleInptData(e) {
        getData(data = e.target.value)
        setErrUser('')
        setMarginText(false)
    }
    function handleIcon() {

        if (inputRef.current.type === "password") {
            inputRef.current.type = "text"
            setToggleIcon(false)
        }
        else {
            inputRef.current.type = "password"
            setToggleIcon(true)
        }
    }
    function handleInptPswd(e) {
        if (e.target.value.length === 0)
            setIcon(false)
        else
            setIcon(true)

        getPassword(password = e.target.value)
        setErrPswd('')

        setMarginPswd(false)
    }
    async function handleLogin() {
        if (data.length === 0 || password.length === 0) {
            if (data.length === 0 && password.length === 0) {
                setErrPswd('please enter password')
                setErrUser('please enter username')
                setMarginText(true)
                setMarginPswd(true)
            }
            else if (data.length === 0) {
                setErrUser('please enter username')
                setMarginText(true)
            }
            else if (password.length === 0) {
                setErrPswd('please enter password')
                setMarginPswd(true)
            }
        }
        else {
            console.log(data, password);
            setUser(()=>{
                setLogin(true)
                return data
            })
            console.log(user,isLogin);
            
            await fetch('./login', {
                method: 'POST',
                headers: {
                    'Accept': 'text/plain',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data,
                    password: password
                })
            }).then((data)=>{
                console.log(data.text());
                redirect('/')
            })
            
        }

    }
    function handleFocus() {
        setTransform(true)
        setTransition(true)
        setHeight(true)
        setFont(true)


    }
    function handleFocusPswd() {
        setHeightPswd(true)
        setTransformPswd(true)
        setTransitionPswd(true)
        setFontPswd(true)

    }
    function handleBlurPswd(e) {
        if (e.target.value.length === 0) {
            setTransformPswd(false)
            setTransitionPswd(false)
            setHeightPswd(false)
            setFontPswd(false)

        }
    }
    function handleBlur(e) {
        if (e.target.value.length === 0) {
            setTransform(false)
            setTransition(false)
            setHeight(false)
            setFont(false)

        }

    }
    var outerDiv = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '0%',
        top: '0%',
        width: '50%',
        height: '100%',
        backgroundColor: '#CFD8DC',
        transform: applyTransformDiv ? 'translatex(0%)' : 'translatex(-100%)',
        transition: 'transform 3s'
    }

    var inptText = {
        width: '100%',
        height: applyHeight ? '100%' : '70%',
        borderRadius: '5px',
        paddingLeft: '5px',
        fontSize: '16px',
        paddingTop: '10px',
        backgroundColor: '#ECEFF1',
        border: '0px',
        maxHeight: '80%',
        outlineColor: '#3B71CA',
        outlineWidth: '3px',

    }
    var inptPswd = {
        width: '100%',
        height: applyHeightPswd ? '100%' : '70%',
        borderRadius: '5px',
        paddingLeft: '5px',
        fontSize: '16px',
        paddingTop: '10px',
        backgroundColor: '#ECEFF1',
        maxHeight: '80%',
        border: '0px',
        outlineColor: '#3B71CA',
        outlineWidth: '2px'
    }
    var inptTextLabel = {
        position: 'absolute',
        left: '5px',
        top: '12px',
        color: '#a9a9a9',
        fontSize: applyFont ? '13px' : '16px',
        transform: applyTransform ? 'translateY(-10px)' : '',
        transition: applyTransition ? 'transform 0.5s' : '',

    }
    var inptLabelPswd = {
        position: 'absolute',
        left: '5px',
        top: '12px',
        color: '#a9a9a9',
        fontSize: applyFontPswd ? '13px' : '16px',
        transform: applyTransformPswd ? 'translateY(-10px)' : '',
        transition: applyTransitionPswd ? 'transform 0.5s' : '',
    }
    return (


        <div>
            <div style={outerDiv}>
                <div style={{ opacity: applyOpacity ? '1' : '0', transform: usernameFieldTransition ? 'translate(0px)' : 'translateY(50px)', transition: 'transform 1s 2s,opacity 1s 2s', position: 'relative', width: '50%', height: '7%', border: '0px', marginBottom: isMarginText ? '3%' : '1%', }}>
                    <input onChange={handleInptData} onFocus={handleFocus} onBlur={handleBlur} style={inptText} type="text" />
                    <label style={inptTextLabel}>username</label>
                    <label style={{ fontSize: '12px', color: '#B71C1C', margin: '0px' }}>{errMsg}</label>
                </div>
                <div style={{ opacity: applyOpacity ? '1' : '0', transform: pswdFieldTransition ? 'translate(0px)' : 'translateY(50px)', transition: 'transform 1.5s 2.5s, opacity 1.5s 2.5s', position: 'relative', width: '50%', height: '7%', border: '0px', marginBottom: isMarginPswd ? '4%' : '2%' }}>
                    <input ref={inputRef} onChange={handleInptPswd} onFocus={handleFocusPswd} onBlur={handleBlurPswd} style={inptPswd} type="password" />
                    <label style={inptLabelPswd}>password</label>
                    <label style={{ fontSize: '12px', color: '#B71C1C', margin: '0px' }}>{errPassword}</label>

                    {toggleIcon ? <PiEyeSlash onClick={handleIcon} style={{ position: 'absolute', top: '34%', left: '93%', fontSize: '20px', display: showIcon ? 'block' : 'none' }} /> : <PiEyeLight onClick={handleIcon} style={{ position: 'absolute', top: '34%', left: '93%', fontSize: '20px', display: showIcon ? 'block' : 'none' }} />}
                </div>
                <button style={{ opacity: applyOpacity ? '1' : '0', transform: buttonTransition ? 'translate(0px)' : 'translateY(50px)', transition: 'transform 2s 3s,opacity 2s 3s', width: '51%', height: '6%', color: 'white', cursor: 'pointer', border: '0px', marginLeft: '1%', outline: '1px solid #3B71CA', borderRadius: '22px', marginBottom: '3%', backgroundColor: '#3B71CA', marginTop: '0%' }} onClick={handleLogin}>Login</button>
                <label style={{ opacity: applyOpacity ? '1' : '0', transform: labelTransition ? 'translate(0px)' : 'translateY(50px)', transition: 'transform 2.5s 3.5s,opacity 2.5s 3.5s' }}>don't have an account? <span style={{ color: '#3B71CA', fontWeight: 'bold', cursor: 'pointer', opacity: '1' }}>Sign up</span> </label>
            </div>
        </div>
    )
}

export default LoginPg