import React from 'react'



const Result = (props) =>{
    const img=`https://source.unsplash.com/300x300?${props.name}`
return <>
<div>
    <img src={img} alt="Search"/>
</div>
</>
}

export default Result;