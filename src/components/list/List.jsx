import React from 'react';

const List = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-5 bg-pink-900 mx-32 justify-items-center'>
            <div className='w-72 h-64 bg-white flex justify-center rounded-xl pt-2'>
                <div className='w-64 h-40 bg-pink-900 rounded-xl'></div>
            </div>
            <div className='w-72 h-64 bg-white flex justify-center rounded-xl pt-2'>
                <div className='w-64 h-40 bg-pink-900 rounded-xl'></div>
            </div>
            <div className='w-72 h-64 bg-white flex justify-center rounded-xl pt-2'>
                <div className='w-64 h-40 bg-pink-900 rounded-xl'></div>
            </div>
            <div className='w-72 h-64 bg-white flex justify-center rounded-xl pt-2'>
                <div className='w-64 h-40 bg-pink-900 rounded-xl'></div>
            </div>
        </div>
    );
}

export default List;
