import { SignInForm } from '@/components/auth/siginin-form'
import { Socials } from '@/components/auth/socials'
import React from 'react'

const page = () => {
  return (
    <>
    <SignInForm />
    <p className='mb-9 text-center font-semibold'>OR</p>
    <Socials />
    </>
  )
}

export default page