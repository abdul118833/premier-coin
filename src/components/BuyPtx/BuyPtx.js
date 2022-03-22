import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import BuyPtxMain from './BuyPtxMain/BuyPtxMain'

const BalanceHistory = () => {
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
            {/* <Navbar login={true} /> */}
            <BuyPtxMain />
            {/* <Footer footerStyle={footerStyle} login={true} /> */}
        </div>
    )
}

export default BalanceHistory