import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SignUpMainComponent from './SignUpMainComponent/SignUpMainComponent'

const SignUp = () => {
    const [footerStyle] = useState({
        smallPosition: '',
        bottom: '',
        mediumPosition: ''
    })
    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <div>
            {/* <Navbar login={false} /> */}
            <SignUpMainComponent />
            {/* <Footer footerStyle={footerStyle} login={false} /> */}
        </div>
    )
}

export default SignUp