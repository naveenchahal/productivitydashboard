import { useState } from "react";
import { useEffect } from "react";
import JobCard from "../components/jobcomponents/JobCard";
import {useMemo} from "react"
import useJobs from "../hooks/useJobs"
import useDebounce from '../hooks/useDebounce'
export default function Jobs() {

  const {loading,setLoading,
  jobs,setJobs,
  error,setError,
  filterjobs,setfilterjobs,setpage,page}=useJobs()
  const debounced=useDebounce(filterjobs,2000)
  


const filtervalues = useMemo(() => {
    return jobs.filter((val) => {
        return val.title.toLowerCase().includes(debounced.trim().toLowerCase());
    });
}, [filterjobs, jobs]);
    return(
         loading==true ? <h1>Loading...</h1> : error ? <h1>Something went wrong</h1> : <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold mb-4">Jobs</h1>
            <input type="search" className="rounded-xl border-2 outline-2 outline-offset-2 outline-pink-500"  onChange={(e)=>{
                setfilterjobs(e.target.value)
            }}
           />
            <div className="grid grid-cols-3 gap-4">
                {filtervalues.sort((a,b)=>a.views-b.views).map((job) => (
                    <JobCard key={job.id} job={job} />
                ))
                
                }
                
            </div>
            <div  className='flex gap-4 w-auto'>

                <button  className='flex justify-center p-2 border-2'
                onClick={()=>{
                    if(page!==0) setpage(page-1)
                }}
                
                >prev</button>
              <button  className='flex justify-center p-2 border-2'
                onClick={()=>{
                 setpage(page+1)
                }}
              
              >next</button>


            </div>
        </div>
    )
}
