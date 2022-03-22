import React from 'react'
import SignInFormComponent from './SignInFormComponent'
import SignInImageCompoent from './SignInImageCompoent'

const SignInMainComponent = () => {
    return (
        <div className='flex'>
            <div className='sm:hidden md:flex w-8/12'>
                <img src='signinback.png' className='object-cover w-full h-full' />
                {/* <SignInImageCompoent /> */}
            </div>
            <div className='sm:w-full md:w-6/12'>
                <SignInFormComponent />
            </div>
        </div>
    )
}

export default SignInMainComponent