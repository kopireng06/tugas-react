import { useState,useEffect } from 'react';

const Clock = ()=>{
    const [timeNow,setTimeNow] = useState(new Date());
  
    useEffect(()=>{
      setInterval(()=>{
        setTimeNow(new Date());
      },1000)
    })
  
    return (
      <div className="clock">{timeNow.toLocaleTimeString()}</div>
    )
}

export default Clock;