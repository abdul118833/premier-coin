import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SignInMainComponent from './SignInMainComponent/SignInMainComponent'

const SignIn = () => {
    const [footerStyle] = useState({
        smallPosition: 'absolute',
        bottom: 0,
        mediumPosition: 'static'
    })
    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <div>
            {/* <Navbar login={false} /> */}
            <SignInMainComponent />
            {/* <Footer footerStyle={footerStyle} login={false} /> */}
        </div>
    )
}

export default SignIn