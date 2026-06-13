import { useState } from "react";
import { useEffect } from "react";
import JobCard from "../components/jobcomponents/JobCard";
import {useMemo} from "react"
export default function Jobs() {

    const[loading,setLoading]=useState(true)
  const[jobs,setJobs]=useState([])
  const[error,setError]=useState(false)
  const[filterjobs,setfilterjobs]=useState("")
  useEffect(() => {

    const fetchJobs = async () => {
         try{
            const response = await fetch('https://dummyjson.com/posts');
            const data = await response.json();
         console.log(data.posts)
            setJobs(data.posts);
            setLoading(false);
         }
         catch{
            setError(true);
            setLoading(false);
         }
    }

    fetchJobs();

}, [])
const filtervalues = useMemo(() => {
    return jobs.filter((val) => {
        return val.title.toLowerCase().includes(filterjobs.trim().toLowerCase());
    });
}, [filterjobs, jobs]);
    return(
         loading==true ? <h1>Loading...</h1> : error ? <h1>Something went wrong</h1> : <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold mb-4">Jobs</h1>
            <input type="search" className="rounded-xl border-2 outline-2 outline-offset-2 outline-pink-500"  onChange={(e)=>{setfilterjobs(e.target.value)}}/>
            <div className="grid grid-cols-3 gap-4">
                {filtervalues.sort((a,b)=>a.views-b.views).map((job) => (
                    <JobCard key={job.id} job={job} />
                ))
                
                }
                
            </div>
        </div>
    )
}