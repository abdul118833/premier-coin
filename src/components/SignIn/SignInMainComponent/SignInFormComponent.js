import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignInFormComponent = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginHandler = (e) => {
        localStorage.setItem('email', JSON.stringify(email))
        localStorage.setItem('password', JSON.stringify(password))
        navigate('/account')
    }
    return (
        <div className='flex justify-center h-full'>
            <div className='w-full sm:px-4 md:px-16 sm:mt-8 md:mt-36'>
                <p className='text-4xl font-bold text-blue sm:text-center md:text-left'>Sign in to Premier token</p>
                <div className="pt-6 mb-4 font-bold">
                    <div className="mb-4">
                        <label className="block text-gray-900 text-sm mb-2" for="email">
                            Email
                        </label>
                        <input className="text-sm border rounded border-border w-full py-3 px-3 text-gray-700  focus:outline-none" id="lastName" type="text" placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-900 text-sm mb-2" for="password">
                            Password
                        </label>
                        <input className="text-sm border rounded w-full border-border py-3 px-3 text-gray-700  focus:outline-none" id="password" type="password" placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-6 flex justify-end">
                        <p className='text-xs text-darkblue' onClick={() => {
                            navigate('/forgetpassword')
                        }}>Forgot password?</p>
                    </div>
                    <div className="mb-6">
                        <button className='bg-blue text-white rounded px-4 py-3 w-full font-bold' onClick={loginHandler}>Login</button>
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

export default SignInFormComponent