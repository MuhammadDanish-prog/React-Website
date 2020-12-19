import React from 'react'
import Cards from './pieces/Cards'
import Array from './pieces/Array'


const Services = () =>{
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid nav-bg mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             
            {
              Array.map((val,index)=>{
                return <Cards 
                imgsrc={val.imgsrc}
                title={val.title}
                key={index}
                />
              })
            }

            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default Services;