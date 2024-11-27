import React from 'react'

function dashboard() {
  return (
    <div className='bg-base-100 flex-1 text-base-content px-4 py-6 h-full'>
        <div className='content grid grid-cols-6'>

            <div className='col-span-1 text-center'>
                <span className='text-accent text-xl font-semibold'>Job application</span>
                
                <ul className='my-3'>
                    <li className="hover:bg-secondary hover:text-secondary-content bg-neutral text-neutral-content my-3">
                        <div className="card-body">
                            <h2 className="card-title">Firmware engineer</h2>
                            <p>Intel corporation</p>
                            <div className="card-actions justify-end">
                                <p>22.10.2024</p>
                            </div>
                        </div>
                    </li>
                    <li className="hover:bg-secondary hover:text-secondary-content bg-primary text-primary-content my-3">
                        <div className="card-body">
                            <h2 className="card-title">Embedded engineer</h2>
                            <p>NTT Data Romania</p>
                            <div className="card-actions justify-end">
                                <p>22.10.2024</p>
                            </div>
                        </div>
                    </li>

                    <li className="hover:bg-secondary hover:text-secondary-content bg-neutral text-neutral-content my-3">
                        <div className="card-body">
                            <h2 className="card-title">Fullstack developer</h2>
                            <p>TechCruise SRL</p>
                            <div className="card-actions justify-end">
                                <p>22.10.2024</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

            <div className='col-span-2 text-center'>
                <span className='text-accent text-xl font-semibold'>Session</span>
            </div>

            <div className='col-span-3 text-center'>
                <span className='text-accent text-xl font-semibold'>Details</span>
            </div>

    </div>


    </div>
  )
}

export default dashboard