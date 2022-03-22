import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import BalanceHistoryMain from './BalanceHistoryMain/BalanceHistoryMain'


const BalanceHistory = () => {
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
            <BalanceHistoryMain />
            {/* <Footer footerStyle={footerStyle} login={true} /> */}
        </div>
    )
}

export default BalanceHistory