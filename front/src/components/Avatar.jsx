import React from 'react'

export const Avatar = () => {

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    };


    return (
        <>
            <div className='flex flex-row justify-around items-center p-2'>
                <div className='flex justify-center items-center flex-col w-fll h-full gap-2 p-6 border-x-slate-400 rounded-sm shadow-md'>
                    <h1 className='text-3xl'>{user.name}</h1>
                    <img src={user.imageUrl} alt={'Image of' + user.name} className='rounded-full' />
                </div>
                <div className='flex justify-center items-center flex-col w-fll h-full gap-2 p-6 border-x-slate-400 rounded-sm shadow-md'>
                    <h1 className='text-3xl'>{user.name}</h1>
                    <img src={user.imageUrl} alt={'Image of' + user.name} className='rounded-full' />
                </div>
                <div className='flex justify-center items-center flex-col w-fll h-full gap-2 p-6 border-x-slate-400 rounded-sm shadow-md'>
                    <h1 className='text-3xl'>{user.name}</h1>
                    <img src={user.imageUrl} alt={'Image of' + user.name} className='rounded-full' />
                </div>
            </div>

        </>
    )
}
