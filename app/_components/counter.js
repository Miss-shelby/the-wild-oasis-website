
'use client'
import React, { useState } from 'react'

const Counter = ({users}) => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <button onClick={()=>setCount((count)=>count+1)}>{count}</button>
      <p>There are {users.length} users</p>
    </div>
  )
}

export default Counter
