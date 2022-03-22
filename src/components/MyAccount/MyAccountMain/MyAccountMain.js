import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MyAccountMain = () => {
    let navigate = useNavigate()
    return (
        <div>
            <div className='sm:hidden md:flex w-full h-64' style={{
                backgroundImage: 'url(bitcoin.png)', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='container px-32 text-white flex justify-center flex-col'>
                    <p className='text-5xl font-bold'>Hey John,</p>
                    <p className='text-lg mt-2'>Welcome to the premier token account</p>
                </div>
            </div>
            <div className='px-4 text-black flex justify-center flex-col md:hidden'>
                <p className='text-4xl font-bold'>Hey John,</p>
                <p className='text-xs mt-2'>Welcome to the premier token account</p>
            </div>

            <div className='w-full flex justify-center sm:my-8 md:my-0 px-4 md:px-32'>
                <div className='sm:w-full md:container sm:p-4 md:p-16 box_shadow rounded-xl bg-white sm:mt-0 md:-mt-16 sm:mb-0 md:mb-16' style={{
                    backgroundImage: 'url(hexagon.png)', backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <div className='w-full flex justify-between sm:items-center md:items-start'>
                        <div className='flex items-center'>
                            <img src='userAvatar.svg' />
                            <p className='sm:tex-lg md:text-3xl text-black sm:ml-2 md:ml-4 font-bold'>John Doe</p>
                        </div>
                        <div className='text-black'>
                            <p className='text-xs'>My PTX total</p>
                            <p className='sm:text-2xl md:text-6xl font-bold'>30,000 PTX</p>
                            <div className='h-1 border-black border-b-4 my-2'></div>
                        </div>
                    </div>
                    <div className='flex justify-end mt-8'>
                        <Link to='/balancehistory'>
                            <button className='sm:w-full md:w-auto text-sm bg-blue rounded px-4 py-3 text-white'>See balance History</button></Link>
                    </div>
                </div>
            </div>
            {/* Background Gradiant */}
            <div className='sm:py-4 md:py-28 flex justify-center items-center' style={{
                backgroundImage: 'url(bgGradient.png)', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='flex sm:flex-col md:flex-row items-center justify-center sm:text-xl md:text-2xl font-bold w-full sm:p-4 md:p-0'>
                    <p className='sm:text-black md:text-white'>My BTC Total</p>
                    <div className='flex rounded-lg bg-white sm:w-full md:w-96 sm:my-3 md:my-0 md:mx-4 shadow-xl'>
                        <p className='p-3 bg-blue rounded-l-lg text-white'>USD</p>
                        <p className='p-3'>30,000</p>
                    </div>
                    <div className='flex rounded-lg bg-white sm:w-full md:w-96 shadow-xl'>
                        <p className='p-3 bg-blue rounded-l-lg text-white '>GBP</p>
                        <p className='p-3'>30,000</p>
                    </div>
                </div>
            </div>

            {/* Buy More Coins */}

            <div className='p-8 flex sm:flex-col md:flex-row justify-center items-center'>
                <div className='p-8 rounded-lg flex items-center flex-col justify-center sm:w-full md:w-2/3 text-lg ' style={{
                    backgroundImage: 'url(bgGradient2.png)', backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <img src='mobileBitcoin.png' className='w-48' />
                    <button className='bg-blue px-6 sm:py-2 md:py-4 rounded text-white my-4'
                        onClick={() => {
                            navigate('/buyptx')
                        }}>Buy more ptx token</button>
                    <button className='sm:text-white md:text-black underline text-sm'
                        onClick={() => {
                            navigate('/support')
                        }}>Support request</button>
                </div>
            </div>
        </div>
    )
}

export default MyAccountMain