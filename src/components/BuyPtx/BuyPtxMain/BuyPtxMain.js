import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const BuyPtxMain = () => {
    const [value, setValue] = useState(0)
    const navigate = useNavigate()
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
                <div className='sm:w-full md:w-1/3 sm:p-4 md:p-16 box_shadow rounded-xl sm:mx-4 bg-white sm:mt-0 md:-mt-16 sm:mb-0 md:mb-16'>
                    <form className="mb-4 font-bold">
                        <div className="mb-4">
                            <label className="block text-gray-900 text-sm mb-2" for="Quantity">
                                Quantity
                            </label>
                            <input className="text-sm border rounded w-full border-border py-3 px-3 text-gray-700  focus:outline-none" id="firstName" type="number" placeholder="Enter quantity"
                                onChange={(e) => setValue(e.target.value)} />
                        </div>
                        <div className="mb-8">
                            <label className="block text-gray-900 text-sm mb-2" for="amountDue">
                                Amount Due
                            </label>
                            <p className="text-sm border bg-gray rounded w-full border-border py-3 px-3 text-gray-700" >{`${value * 5.8} USD`}</p>
                        </div>
                        <div className="mb-4">
                            <button className='bg-blue text-white rounded px-4 py-3 w-full font-bold'
                                onClick={() => {
                                    navigate('/balancehistory')
                                }}>Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BuyPtxMain