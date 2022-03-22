import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import PaymentUnSuccessFullMain from './PaymentUnSuccessFullMain/PaymentUnSuccessFullMain'

const PaymentUnSuccessFull = () => {
    const [footerStyle] = useState({
        smallPosition: '',
        bottom: 0,
        mediumPosition: ''
    })
    return (
        <div>
            {/* <Navbar login={true} /> */}
            <PaymentUnSuccessFullMain />
            {/* <Footer footerStyle={footerStyle} login={true} /> */}
        </div>
    )
}

export default PaymentUnSuccessFull