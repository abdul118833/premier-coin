import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import SupportRequestMain from './SupportRequestMain/SupportRequestMain'

const SupportRequest = () => {
    const [footerStyle] = useState({
        smallPosition: '',
        bottom: 0,
        mediumPosition: ''
    })
    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <div>
            {/* <Navbar login={true} /> */}
            <SupportRequestMain />
            {/* <Footer footerStyle={footerStyle} login={true} /> */}
        </div>
    )
}

export default SupportRequest