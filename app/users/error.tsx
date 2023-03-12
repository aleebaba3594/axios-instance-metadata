"use client";

import { useRouter } from 'next/navigation';

export default function  GlobalError(error:Error,reset:()=>void){
  const router= useRouter()
  
  return (
    <div>
      <h2>An error Occured!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
      <button onClick={()=>{router.push("/")}}>Go Home</button>
    </div>
  );
}
 