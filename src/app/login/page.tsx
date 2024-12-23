import React from 'react'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Button } from '@/components/ui/button';

const LoginPage = () => {
    return (
        <main className='h-dvh flex flex-col items-center gap-6 text-4xl p-4'>
            <h1>Computer Repair Shop</h1>
            <Button asChild>
                <LoginLink>Sign in</LoginLink>
            </Button>
        </main>
    )
}

export default LoginPage