import React from 'react'
import ForgotPasswordForm from './ForgotPasswordForm'

const ForgotPasswordMain = () => {
    return (
        <div className='flex'>
            <div className='sm:hidden md:flex w-8/12'>
                <img src='signinback.png' className='object-cover w-full h-full' />
            </div>
            <div className='sm:w-full md:w-6/12'>
                <ForgotPasswordForm />
            </div>
        </div>
    )
}

export default ForgotPasswordMain