import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Footer = (props) => {
    const navigate = useNavigate()
    return (
        //Footer Main Div
        <div className={`w-full bg-lightGray sm:px-4 md:px-32 sm:${props.footerStyle.smallPosition} sm:bottom-${props.footerStyle.bottom}  md:${props.footerStyle.mediumPosition}`}>
            {/* Inner Div inside the Footer */}
            {props.login && <div className='md:container w-full mx-auto flex flex-col items-center justify-center py-12 border-b border-border'>
                <p className='text-3xl font-bold text-black'>Premier Token</p>
                <div className='flex items-center mt-4'>
                    {[
                        { link: 'account', label: 'Account' },
                        { link: 'balancehistory', label: 'Balance History' },
                        { link: 'buyptx', label: 'Buy PTX' },
                        { link: 'support', label: 'Support' }].map(item => {
                            return <p className='sm:text-xs md:text-sm mr-4 cursor-pointer' onClick={
                                () => {
                                    navigate(`${item.link}`)
                                }}>{item.label}</p>
                        })}
                </div>
            </div>}
            <div className='md:container w-full mx-auto flex items-center justify-between py-4'>
                <div>
                    <p className='sm:text-xs md:text-sm'>© 2022 Premier Token. All rights reserved</p>
                </div>
                {/* Links to Social Media Sites */}
                <div className='flex items-center cursor-pointer'>
                    <div className='bg-gray rounded-full'>
                        <img src='ig.svg' className='p-1 w-6' />
                    </div>
                    <div className='bg-gray rounded-full mx-4'>
                        <img src='twit.svg' className='p-1 w-6' />
                    </div>
                    <div className='bg-gray rounded-full'>
                        <img src='utube.svg' className='p-1 w-6' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer