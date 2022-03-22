import React from 'react'
import SignUpFormComponent from './SignUpFormComponent'

const SignUpMainComponent = () => {
    return (
        <div className='flex'>
            <div className='sm:hidden md:flex w-8/12'>
                <img src='signupback.png' className='object-cover w-full h-full' />
                {/* <SignInImageCompoent /> */}
            </div>
            <div className='sm:w-full md:w-6/12'>
                <SignUpFormComponent />
            </div>

        </div>
    )
}

export default SignUpMainComponent