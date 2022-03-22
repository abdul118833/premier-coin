import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import PaymentSuccessFullMain from './PaymentSuccessFullMain/PaymentSuccessFullMain'

const PaymentSuccessFull = () => {
    const [footerStyle] = useState({
        smallPosition: '',
        bottom: 0,
        mediumPosition: ''
    })
    return (
        <div>
            {/* <Navbar login={true} /> */}
            <PaymentSuccessFullMain />
            {/* <Footer footerStyle={footerStyle} login={true} /> */}
        </div>
    )
}

export default PaymentSuccessFull