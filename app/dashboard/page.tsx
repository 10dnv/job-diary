"use client"
import React, { useState } from 'react'

function dashboard() {
    const [jobApplicationList, setJobApplicationList] = useState([]);
    const [selectedJobApplicationId, setSelectedJobApplicationId] = useState(-1);
    
    const handleSelectedJobAppl =(id:number)=>{
        setSelectedJobApplicationId(id);
    };

    const application_db = [
        {
            id:0,
            job_title: "Firmware Engineer",
            creation_date:"25-10-2024",
            company_name:"Intel Corporation",
            external_url:"https://www.intel.com",
            sessions:[{
                session_id:0,
                session_type:"done", //done, planned, canceled
                session_name:"Initial call",
                session_date:"01-11-2024",
                session_info:[{
                    recruiter_name:"Olga Marin",
                    recruiter_phone:"+49012345678",
                    recruiter_email:"olga.marin@intel.com",
                    recruiter_linkedin:"https://www.linkedin.com/olga+marin",
                }]

            }]
        },

        {
            id:1,
            job_title: "Embedded Engineer",
            creation_date:"27-10-2024",
            company_name:"NTT Data Romania",
            external_url:"https://www.ntt.com",
            sessions:[{
                session_id:0,
                session_type:"done",
                session_name:"Initial call",
                session_date:"29-10-2024",
                session_info:[{
                    recruiter_name:"Miruna Xulescu",
                    recruiter_phone:"+4012345678",
                    recruiter_email:"miruna.xulescu@ntt.com",
                    recruiter_linkedin:"https://www.linkedin.com/miruna+xulescu",
                }]
                },

                {
                    session_id:1,
                    session_type:"planned",
                    session_name:"Technical Interview",
                    session_date:"01-11-2024",
                    session_info:[{
                        recruiter_name:"George Tan",
                        recruiter_phone:"+4012345678",
                        recruiter_email:"george.tan@ntt.com",
                        recruiter_linkedin:"https://www.linkedin.com/miruna+xulescu",
                    }]
                }
            ]
        },
    ];

  return (
    <div className='bg-base-100 flex-1 text-base-content px-4 py-6 h-full'>
        <div className='content grid grid-cols-6'>

            <div className='col-span-1 text-center'>
                <span className='text-accent text-xl font-semibold'>Job application</span>

                {/* Add menu buttons for current application */}
                <div className='application-column-buttons flex justify-between py-5'>
                    <button className='btn btn-sm btn-primary btn-outline'>+</button>
                    <button className={selectedJobApplicationId>=0?'btn btn-sm btn-primary btn-outline':'btn btn-sm btn-primary btn-outline btn-disabled'}>E</button>
                    <button className={selectedJobApplicationId>=0?'btn btn-sm btn-primary btn-outline':'btn btn-sm btn-primary btn-outline btn-disabled'}>X</button>
                </div>
                
                
                <ul className='my-3'>
                    {
                        application_db.length?application_db.map((data)=>(
                            <li key={data.id} className={selectedJobApplicationId==data.id?"bg-secondary text-secondary-content":"hover:bg-secondary hover:text-secondary-content bg-primary text-primary-content my-3"}  onClick={()=>handleSelectedJobAppl(data.id)}>
                            <div className="card-body">
                                <h2 className="card-title">{data.job_title}</h2>
                                <p>{data.company_name}</p>
                                <div className="card-actions justify-end">
                                    <p>{data.creation_date}</p>
                                </div>
                            </div>
                        </li>
                        )):<h1>No job applications yet</h1>
                    }
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