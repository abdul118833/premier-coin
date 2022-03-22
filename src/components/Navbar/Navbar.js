import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    let navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    return (
        // Main Div of Navbar
        <div className='w-full bg-white sm:px-4 md:px-32 sm:border-b md:border-none'>
            {/* Container Div of Navbar */}
            {toggle ? <div>
                <div className='w-screen h-screen bg-black z-10 opacity-40 fixed' onClick={() => setToggle(!toggle)}>
                </div> <div className='flex items-center flex-col bg-blue fixed h-screen w-60 z-20 top-0 left-0 transition duration-1000 px-4'>
                    <div className='mt-8 w-full'>
                        <span className='absolute top-4 right-4' onClick={() => setToggle(!toggle)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                            </svg>
                        </span>
                        <div className='flex md:hidden'>
                            <img src='AppLogo.svg' className='w-24' />
                        </div>
                        <div className='mt-8'>
                            {[
                                { link: 'account', label: 'Account' },
                                { link: 'balancehistory', label: 'Balance History' },
                                { link: 'buyptx', label: 'Buy PTX' },
                                { link: 'support', label: 'Support' },
                                { link: 'signin', label: 'Sign In' },
                                { link: 'signup', label: 'Sign Up' }].map(item => {
                                    return <NavLink to={item.link}> <p className='w-full text-center py-2 text-white hover:font-bold'>{item.label}</p>
                                    </NavLink>
                                })}
                        </div>
                        <div>
                            <button className='bg-white text-blue w-full font-bold rounded-lg px-4 py-2 mt-4'>Connect Wallet</button>
                        </div>
                    </div>

                </div>
            </div>
                : ''}
            <div className='md:container w-full mx-auto flex items-center justify-between py-4'>
                {/* Left Side Of Navigation Bar */}
                <div className='w-1/2 md:flex items-center'>
                    {/* Logo of the App */}
                    <Link to="/">
                        <div className='flex items-center md:hidden'>
                            <img src='AppLogo.svg' className='w-16' />
                        </div>
                    </Link>
                    <Link to="/">
                        <div className='hidden md:flex'>
                            <img src='AppLogo.svg' className='w-24' />
                        </div>
                    </Link>
                    {/* Navigation Links of Navbar */}
                    <div className='md:flex w-full justify-evenly ml-4 sm:hidden'>
                        {[
                            { link: 'account', label: 'Account' },
                            { link: 'balancehistory', label: 'Balance History' },
                            { link: 'buyptx', label: 'Buy PTX' },
                            { link: 'support', label: 'Support' }].map(item => {
                                return <Link to={item.link}> <p >{item.label}</p></Link>
                            })}
                    </div>
                </div>
                {/* Right Side Of Navigation Bar */}
                <div className='bg-white w-10 h-10 rounded-lg box_shadow md:hidden' onClick={() => setToggle(!toggle)}>
                    <img src='menuIcon.svg' className='w-10 h-10 p-2' />
                </div>
                {props.login && <div className='sm:flex md:hidden'>
                    <div>
                        <button className='bg-blue text-white rounded-lg px-4 py-2'>Connect Wallet</button>
                    </div>
                </div>}
                <div className='w-1/2 md:flex items-center justify-end hidden'>
                    {/* Moving Div to Right Side */}
                    <div className='mr-8'>
                        <button className='bg-blue text-white rounded-lg px-4 py-3'>Connect Wallet</button>
                    </div>
                    {/* User Image and Name */}
                    {localStorage.getItem('email') ? <div className='flex items-center'>
                        <img src='userAvatar.svg' className='w-10' />
                        <p className='mx-4'>John Doe</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </div> : <div>
                        <div>
                            <button className='bg-blue text-white rounded-lg px-4 py-3' onClick={() => {
                                navigate('/signin')
                            }}>Login</button>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar