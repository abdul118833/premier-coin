import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ConfirmEmailMainComponent from './ConfirmEmailMainComponent/ConfirmEmailMainComponent'
const ConfirmEmailComponent = () => {
    const [footerStyle] = useState({
        smallPosition: 'absolute',
        bottom: 0,
        mediumPosition: 'static'
    })
    return (
        <div>
            {/* <Navbar login={false} /> */}
            <ConfirmEmailMainComponent />
            {/* <Footer footerStyle={footerStyle} login={false} /> */}
        </div>
    )
}

export default ConfirmEmailComponent