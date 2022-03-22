import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUpFormComponent = () => {
    let navigate = useNavigate()
    return (
        <div className='flex justify-center h-full'>
            <div className='w-full sm:px-4 md:px-16 sm:mt-4 md:mt-8'>
                <p className='text-4xl font-bold text-blue sm:text-center md:text-left'>Create your account</p>
                <div className="pt-6 mb-4 font-bold">
                    <div className="mb-4">
                        <label className="block text-gray-900 text-sm mb-2" for="referalcode">
                            Referel Code
                        </label>
                        <input className="text-sm border rounded w-full border-border py-3 px-3 text-gray-700  focus:outline-none" id="firstName" type="text" placeholder="Enter referal code" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 text-sm mb-2" for="name">
                            Name
                        </label>
                        <input className="text-sm border rounded w-full border-border py-3 px-3 text-gray-700  focus:outline-none" id="firstName" type="text" placeholder="Enter your name" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-900 text-sm mb-2" for="email">
                            Email
                        </label>
                        <input className="text-sm border rounded border-border w-full py-3 px-3 text-gray-700  focus:outline-none" id="lastName" type="text" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-900 text-sm mb-2" for="password">
                            Password
                        </label>
                        <input className="text-sm border rounded border-border w-full py-3 px-3 text-gray-700  focus:outline-none" id="lastName" type="password" placeholder="Enter your password" />
                    </div>
                    <div className="mb-6 flex items-center">
                        <input type="checkbox" />
                        <p className='text-xs text-blue ml-2 font-normal'>I have read and agree to the Terms of Service</p>
                    </div>
                    <div className="mb-6">
                        <button className='bg-blue text-white rounded px-4 py-3 w-full font-bold'
                            onClick={() => {
                                navigate('/account')
                            }}>Sign up</button>
                    </div>
                    <div className='flex justify-center items-center font-normal text-black sm:my-8 md:my-32'>
                        <p>Doesn’t have an account?</p>
                        <Link to='/signup'><p className='ml-4 text-darkblue'> Sign up now</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpFormComponent