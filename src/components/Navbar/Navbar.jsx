import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-evenly items-center py-1'>
            <div className='h-12 w-12 flex justify-center items-center'>
                {/* <img src="" alt=""  className='w-full h-full'/> */}
                <span className='text-xl font-bold text-white'>Logo</span>
            </div>
            <div>
                <h1 className='font-bold text-lg text-white
                '>Tara's Quiz Application</h1>
            </div>
            <div className='bg-blue-600 px-4 text-white rounded-lg py-1 flex justify-center items-center md:px-6 lg:px-8 lg:cursor-pointer lg:rounded-sm'>
                <span className='font-semibold text-lg'>Add</span>
            </div>
            <div className='px-4 bg-black text-white rounded-md py-1 md:px-6 lg:px-8'>
                <span>08 : 56 : 20</span>
            </div>
        </nav>
    </>
  )
}

export default Navbar