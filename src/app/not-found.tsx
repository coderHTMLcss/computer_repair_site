import Image from 'next/image'

export default function NotFound() {
    return (
        <div className='px-2 w-full text-center mt-20'>
            <h2 className='text-2xl'>Page Not Found</h2>
            <Image
                className='mx-auto'
                src='/images/PageNotFound.png'
                width={500}
                height={500}
                alt='Page Not Found'
                sizes='500px'
                priority={true}
                title='Page Not Found'
            />
        </div>
    )
}