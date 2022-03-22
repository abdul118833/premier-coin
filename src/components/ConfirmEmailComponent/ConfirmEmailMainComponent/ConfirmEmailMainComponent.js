import React from 'react'
import ConfirmEmailTextComponent from './ConfirmEmailTextComponent'

const ConfirmEmailMainComponent = () => {
    return (
        <div className='flex'>
            <div className='sm:hidden md:flex w-8/12'>
                <img src='confirmEmailback.png' className='object-cover w-full h-full' />
                {/* <SignInImageCompoent /> */}
            </div>
            <div className='sm:w-full md:w-6/12'>
                <ConfirmEmailTextComponent />
            </div>
        </div>
    )
}

export default ConfirmEmailMainComponent