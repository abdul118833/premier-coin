import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordForm = () => {
    return (
        <div className='flex justify-center h-full'>
            <div className='w-full sm:px-4 md:px-16 sm:mt-8 md:mt-36'>
                <p className='text-4xl font-bold text-blue sm:text-center md:text-left'>Recover password</p>
                <form className="pt-6 mb-4 font-bold">
                    <div className="mb-4">
                        <label className="block text-gray-900 text-sm mb-2" for="name">
                            Name
                        </label>
                        <input className="text-sm border rounded w-full bg-lightGray border-border py-3 px-3 text-gray-700  focus:outline-none" id="firstName" type="text" value="Abdul Majid" placeholder="Enter your name" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-900 text-sm mb-2" for="email">
                            Email
                        </label>
                        <input className="text-sm border rounded border-border w-full py-3 px-3 text-gray-700  focus:outline-none" id="lastName" type="text" placeholder="Enter your email" />
                    </div>
                    {/* <div className="mb-6 flex justify-end">
                        <p className='text-xs text-darkblue'>Forgot password?</p>
                    </div> */}
                    <div className="mb-6">
                        <button className='bg-blue text-white rounded px-4 py-3 w-full font-bold'>Recover your password</button>
                    </div>
                    <div className='flex justify-center items-center font-normal text-black sm:my-8 md:my-32'>
                        <p>Doesn’t have an account?</p>
                        <Link to='/signup'><p className='ml-4 text-darkblue'> Sign up now</p></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPasswordForm