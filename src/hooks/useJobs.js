import { useState } from "react";
import { useEffect } from "react";


   export default function useJobs() {const[loading,setLoading]=useState(true)
  const[jobs,setJobs]=useState([])
  const[error,setError]=useState(false)
  const[filterjobs,setfilterjobs]=useState("")
  const[page,setpage]=useState(1);
  useEffect(() => {

    const fetchJobs = async () => {
         try{

            const skip= (page-1)*5

const response = await fetch(
  `https://dummyjson.com/posts?limit=${5}&skip=${skip}`
);

let data = await response.json();
           
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

}, [page])

return {
    jobs,
    error,
    filterjobs,
    loading,
    setJobs,
    setError,
    setfilterjobs,
    setLoading,
    setpage,
    page
    

}

}