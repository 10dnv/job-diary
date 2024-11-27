import React from 'react'

function Navbar() {
  return (
    <div className='navbar bg-base-200 h-16 flex items-center justify-between px-2'>
      
        {/* LOGO */}
          <div className='text-primary  font-bold text-2xl'>
            <span className='fa-solid fa-book fa-duotone mx-2'/>
            <span>Applicant Diary</span>
          </div>
          <button className="btn btn-outline btn-primary">Join</button>

      </div>
  )
}

export default Navbar