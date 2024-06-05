import React from 'react'
import { Helmet } from 'react-helmet-async'

export const SigninPage = () => {
    return (
        <>
            {/* <Helmet>
                <title>Sign in - Access your account now</title>
                <meta
                    name='description'
                    content="Sign in to your account to eplore personalized features. Forgot your password? Reset it here and keep enjoying our services. Don't have an account? Sign up today!"
                />
            </Helmet> */}

            {/** main container section */}
            <div className='w-full bg-gray-200'>
                {/** login section */}
                <dib className="flex md:flex-col">
                    {/** Header section */}
                    <div className='flex w-[50%] flex-col justify-center gap-[50px] bg-white-A700 px-12 pb-[383px] pt-[47px] md:w-full md:p-5'></div>
                    <h1 className='bg-black'>Hello world</h1>
                    <img 
                    src=""
                    alt="image frame"
                    className='h-[1024px] w-[50%] object-cover md:w-full'
                    />
                </dib>
            </div>
        </>
    )
}
