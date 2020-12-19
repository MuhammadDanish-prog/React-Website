import React, { useState } from 'react'



const Contact = () =>{

const[data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    message:''
}) 

const inputEvent = (event) =>{
    const{name,value}=event.target;
    setData((preval)=>{
        return{
            ...preval,
            [name]:value,
        };
    });
}

const formSubmit = (e) =>{
e.preventDefault()
alert(`My Name is ${data.fullname} My Phone Number is ${data.phone} My Email Address is ${data.email} Message ${data.message}`)
}
    return(

        <>
        <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        </div>

<div className="container contact_div">
<div className="row">
  <div className="col-md-6 col-10 mx-auto">
  <form onSubmit={formSubmit}>
  <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Mobile Number" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={inputEvent} rows={3} defaultValue={""} />
        </div>

        <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  </div>
  </form>
  </div>
</div>
</div>
</>
    );
}

export default Contact;