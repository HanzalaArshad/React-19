import React from 'react'
import { Form } from 'react-router-dom'

export const  getContact=async({request})=>{
  try {

    const res=await request.formData();
     const data=Object.fromEntries(res)
     console.log(data);
     
    return null;

    

    
  } catch (error) {
     console.log(error);
     
  }
}

const Contact = () => {
  return (

    <>
     <section className='container-fluid px-5 mt-5 mb-5'>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 col-12">
          <Form className='border-3 px-4 pb-4' method='POST' action='/contact'>
  <div className="form-group mt-2">
    <h1 className='text-center'> Form Data</h1>
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput username" name="username" required autoComplete="off" placeholder="Enter full name"/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Email</label>
    <input type="email" className="form-control" id="formGroupExampleInput2 email" name="=email" required autoComplete="off" placeholder="Enter Email"/>
  </div>

  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Phone</label>
    <input type="number" className="form-control" id="formGroupExampleInput3 Phone" name="=Phone" required autoComplete="off" placeholder="Enter Email"/>
  </div>

  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Message</label>
    <textarea type="text" className="form-control" id="formGroupExampleInput4 message" name="=message" required autoComplete="off" placeholder="Enter Email"/>
  </div>

  <div className="form-group">

    <button className='btn btn-success mt-3'>Submit</button>
      </div>
  


</Form>
            
          </div>
          <div className="col-md-4 gx-3 col-12">
            <figure>
              <img src="contact.jpg" alt=""  className='img-fluid'/>
            </figure>
          </div>
        </div>
      </div>

     </section>
    </>
  )
}

export default Contact