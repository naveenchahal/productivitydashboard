import {useState} from 'react'
import{useEffect} from 'react'
export default function useDebounce(search,delay){

    const[debounce,setdebounce]=useState("");
useEffect(()=>{
  let timer=setTimeout(()=>{

    setdebounce(search);

    return ()=> clearTimeout(timer)
  },delay)

},[search,delay])

return debounce;
  
}