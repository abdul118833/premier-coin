import React from 'react'

const PaymentUnSuccessFullMain = () => {
    return (
        <div>
            <div className='sm:hidden md:flex w-full h-64' style={{
                backgroundImage: 'url(bitcoin.png)', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='container px-32 text-white flex justify-center flex-col'>
                    <p className='text-5xl font-bold'>Buy PTX</p>
                    <p className='text-lg mt-2'>Enter Quantity to buy PTX</p>
                </div>
            </div>
            <div className='px-4 text-black flex justify-center flex-col md:hidden'>
                <p className='text-4xl font-bold'>Buy PTX</p>
                <p className='text-xs mt-2'>Enter Quantity to buy PTX</p>
            </div>
            <div className='w-full flex justify-center sm:my-8 md:my-0'>
                <div className='sm:w-full md:w-1/3 sm:p-4 md:p-16 box_shadow rounded-xl sm:mx-4 flex flex-col items-center bg-white sm:mt-0 md:-mt-16 sm:mb-0 md:mb-16'>
                    <img src='unsuccess.png' className='w-96' />
                    <p className='my-6 text-center'>Please try again and contact our support</p>
                    <div className="mb-6">
                        <button className='bg-blue text-white rounded px-8 py-3 font-bold'>Back</button>
                    </div>
                    <p className='text-lg underline font-bold'>Contact Support</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentUnSuccessFullMain