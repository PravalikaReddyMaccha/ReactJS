import React from 'react'
import {useParams} from 'react-router-dom'
export default function User() {
    const {userid} = useParams();
  return (
    <div className="grid  place-items-center p-10 text-blue-800 bg-yellow-200">
      {
        userid?(
            <h2>User Id is {userid}</h2>
        ):(
            <h2>No user ID is provided</h2>
        )
      }
       
    </div>
  )
}
