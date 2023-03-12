"use client"
import Link from "next/link";
import { useState } from "react";
// custom hook to reduce the hits it will work after we stop typing
import useDebounce from "./hooks/useDebounce";
import PsotUserPost from "@/lib/postUserPost";



export default function Home() {
  const [inpData, setInpData] = useState("")
  const [resData, setResData] = useState("")
  const debouncedValue = useDebounce<string>(inpData, 500)
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInpData(e.target.value)
  }
  const onSubmit =async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    const res= await PsotUserPost(inpData)
    setResData(res.innerData);
    setInpData("")
  }
  return (
    <main>
      <h1>below is a users component</h1>
      <button>
        <Link href="/users">users component</Link>
      </button>
      <br />
      <br />
      <p>just to check the data posting through axios instance</p>
      <form>
      <input type="text" onChange={(e)=>handleInput(e)} value={inpData} placeholder="enter value"/>
      <button  onClick={(e)=>{onSubmit(e)}}>submit</button>
      </form>
      {resData? <p> posted value : {resData}</p>:""}
    </main>
  );
}
