import {useState,useEffect} from 'react';
import { useLoaderData } from 'react-router-dom'
export default function Github() {
  const data = useLoaderData()
  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/pravalikareddymaccha')
  //   .then(response=>response.json())
  //   .then(data=>setData(data))
  // },[])
 
  return (
    <div className="grid gap-5 place-items-center p-10 text-blue-800 bg-yellow-20">
       Github followers: {data.followers}
       <img src={data.avatar_url} alt="image" />
    </div>
  )
}
 export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/pravalikareddymaccha')
    return response.json()
}

