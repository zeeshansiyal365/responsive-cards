import React from 'react'

const Cards = () => {
  return (
    <>
    <div className='mx-27 my-5'>
    <p className='text-3xl font-extrabold mb-3'>Services</p>
    <p className='font-normal text-lg text-gray-700 '>Here is a few of the awesome Services we provide.</p>
    <div className=' grid w-full sm:grid-cols-2 gap-5 mt-10'>
    <div className='py-6 px-6 border-2 border-r-8 border-b-8 rounded-2xl rounded-tl-lg border-blue-800'>
    <p className='font-bold text-lg ms-2 mb-5'>DAPP Development</p>
    <span className='text-blue-700' >--------</span>
    <p className='text-gray-700'>A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.</p>
    </div>
    
    <div className='py-6 px-6 border-2 border-r-8 border-b-8 rounded-2xl rounded-tl-lg border-purple-600'>
    <p className='font-bold text-lg ms-2 mb-5'>Web 3.0 Development</p>
    <span className='text-purple-600' >--------</span>
    <p className='text-gray-700'>Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web.</p>
    </div>
    
    </div>    

    {/* ------------------ */}
     <div className=' grid w-full sm:grid-cols-3 gap-5 mt-10'>
    <div className='py-6 px-6 border-2 border-r-8 border-b-8 rounded-2xl rounded-tl-lg border-sky-400'>
    <p className='font-bold text-lg ms-2 mb-5'>Project Audit</p>
    <span className='text-sky-400' >--------</span>
    <p className='text-gray-700'>A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld.</p>
    </div>
    
    <div className='py-6 px-6 border-2 border-r-8 border-b-8 rounded-2xl rounded-tl-lg border-yellow-400'>
    <p className='font-bold text-lg ms-2 mb-5'>Hacking / RE</p>
    <span className='text-yellow-400' >--------</span>
    <p className='text-gray-700'>A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network.</p>
    </div>
    
    
    <div className='py-6 px-6 border-2 border-r-8 border-b-8 rounded-2xl rounded-tl-lg border-green-500'>
    <p className='font-bold text-lg ms-2 mb-5'>Bot/Script Development</p>
    <span className='text-green-500' >--------</span>
    <p className='text-gray-700'>Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process.</p>
    </div>
    
    </div>    
        
    </div> 
    
    
    </>
  )
}

export default Cards