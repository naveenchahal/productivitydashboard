import { useState } from "react";
import { useEffect } from "react";


   export default function useJobs() {const[loading,setLoading]=useState(true)
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

return {
    jobs,
    error,
    filterjobs,
    loading,
}

}