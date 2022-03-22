import moment from 'moment'
import React from 'react'

const BalanceHistoryMain = () => {
    return (
        <div>
            <div className='sm:hidden md:flex w-full h-64' style={{
                backgroundImage: 'url(bitcoin.png)', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='container px-32 text-white flex justify-center flex-col'>
                    <p className='text-5xl font-bold'>Balance History</p>
                    <p className='text-lg mt-2'>See your PTX buying history</p>
                </div>
            </div>
            <div className='px-4 text-black flex justify-center flex-col md:hidden'>
                <p className='text-4xl font-bold'>Balance History</p>
                <p className='text-xs mt-2'>See your PTX buying history</p>
            </div>
            {/* timeLine */}
            <div className='w-full flex justify-center sm:my-8 md:my-0 px-4 md:px-32 text-black'>
                <div className='sm:w-full md:container sm:p-4 md:p-16 box_shadow rounded-xl bg-white sm:mt-0 md:-mt-16 sm:mb-0 md:mb-16'>
                    <div className='flex items-center mb-4'>
                        <div className='w-4 h-4 border-4 border-blue rounded-full'>
                        </div>
                        <div className='w-full flex justify-between items-center p-4 px-6 ml-4 bg-lightGray rounded-lg'>
                            <div className='flex sm:flex-col md:flex-row items-center'>
                                <p className='text-lg font-bold'>{moment(new Date()).format('DD/MM/YYYY')}</p>
                                <p className='text-sm md:ml-8'>Initial purchase</p>
                            </div>
                            <p className='text-lg font-bold'>1000PTX</p>
                        </div>
                    </div>

                    <div className='flex items-center mb-4'>
                        <div className='w-4 h-4 border-4 border-blue rounded-full'>
                        </div>
                        <div className='w-full flex justify-between items-center p-4 px-6 ml-4 bg-lightGray rounded-lg'>
                            <div className='flex sm:flex-col md:flex-row items-center'>
                                <p className='text-lg font-bold'>{moment(new Date()).format('DD/MM/YYYY')}</p>
                                <p className='text-sm md:ml-8'>Initial purchase</p>
                            </div>
                            <p className='text-lg font-bold'>1000PTX</p>
                        </div>
                    </div>

                    <div className='flex items-center mb-4'>
                        <div className='w-4 h-4 border-4 border-blue rounded-full'>
                        </div>
                        <div className='w-full flex justify-between items-center p-4 px-6 ml-4 bg-lightGray rounded-lg'>
                            <div className='flex sm:flex-col md:flex-row items-center'>
                                <p className='text-lg font-bold'>{moment(new Date()).format('DD/MM/YYYY')}</p>
                                <p className='text-sm md:ml-8'>Initial purchase</p>
                            </div>
                            <p className='text-lg font-bold'>1000PTX</p>
                        </div>
                    </div>

                    <div className='flex items-center mb-4'>
                        <div className='w-4 h-4 border-4 border-blue rounded-full'>
                        </div>
                        <div className='w-full flex flex-col p-4 px-6 ml-4 bg-lightGray rounded-lg'>
                            <div className='flex justify-between items-center'>
                                <div className='flex sm:flex-col md:flex-row items-center'>
                                    <p className='text-lg font-bold'>Current value</p>
                                </div>
                                <p className='text-lg font-bold'>5000PTX</p>
                            </div>
                            <div className='flex justify-between items-center sm:mt-3 md:mt-6'>
                                <div className='flex sm:flex-col md:flex-row items-center'>
                                    <p className='text-lg font-bold'>Total</p>
                                </div>
                                <p className='text-lg font-bold'>$5,000</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalanceHistoryMain