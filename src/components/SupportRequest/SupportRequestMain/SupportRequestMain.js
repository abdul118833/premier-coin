import React from 'react'

const SupportRequestMain = () => {
    return (
        <div>
            <div className='sm:hidden md:flex w-full h-64' style={{
                backgroundImage: 'url(bitcoin.png)', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='container px-32 text-white flex justify-center flex-col'>
                    <p className='text-5xl font-bold'>Buy PTX</p>
                    <p className='text-lg mt-2'>Contact our customer support</p>
                </div>
            </div>
            <div className='px-4 text-black flex justify-center flex-col md:hidden'>
                <p className='text-4xl font-bold'>Support Request</p>
                <p className='text-xs mt-2'>Contact our customer support</p>
            </div>
            <div className='w-full flex justify-center sm:my-8 md:my-0'>
                <div className='sm:w-full md:w-1/3 sm:p-4 md:p-16 box_shadow rounded-xl sm:mx-4 bg-white sm:mt-0 md:-mt-16 sm:mb-0 md:mb-16'>
                    <form className="mb-4 font-bold">
                        <div className="mb-8">
                            <label className="block text-gray-900 text-sm mb-2" for="Message">
                                Message
                            </label>
                            <textarea className="p-4 text-sm border h-48 rounded w-full border-border py-3 px-3 text-gray-700  focus:outline-none" id="firstName" type="text" placeholder="Write message" />
                        </div>
                        <div className="mb-4">
                            <button className='bg-blue text-white rounded px-4 py-3 w-full font-bold'>Submit support request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SupportRequestMain