import React, { useState } from 'react'
import Result from './Result'



const Services = () =>{
    const [img,SetImg]=useState('')
    const inputEvent = (event) =>{
     const data=event.target.value
     SetImg(data)
     console.log(data)
    }
return <>
<div>
    <input type='text' value={img} placeholder="Enter YOur Image" onChange={inputEvent} />
</div>
{img === ''?null:<Result name={img}/>}
</>
}

export default Services;