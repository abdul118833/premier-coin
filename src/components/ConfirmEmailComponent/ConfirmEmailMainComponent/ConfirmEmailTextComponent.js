import React from 'react'

const ConfirmEmailTextComponent = () => {
    return (
        <div className='flex justify-center h-full'>
            <div className='w-full sm:px-4 md:px-16 sm:mt-24 md:mt-36'>
                <div className='flex justify-center flex-col items-center md:px-16'>
                    <p className='text-2xl font-bold text-blue text-center'>Please confirm your account by clicking the confirmation email that has been sent to you!</p>
                    <div className="my-6">
                        <button className='bg-blue text-white rounded px-4 py-3 font-bold'>Resend email</button>
                    </div>
                    <div>
                        <button className='text-black font-bold underline'>login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConfirmEmailTextComponent