import {useState,useEffect} from 'react';

export default function Github() {

  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('https://api.github.com/users/pravalikareddymaccha')
    .then(response=>response.json())
    .then(data=>setData(data))
  },[])

  return (
    <div className="grid gap-5 place-items-center p-10 text-blue-800 bg-yellow-20">
       Github followers: {data.followers}
       <img src={data.avatar_url} alt="image" />
    </div>
  )
}
