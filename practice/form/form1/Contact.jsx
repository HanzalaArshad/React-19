import React, { useState } from 'react'

const Contact = () => {

   const [user,setUser]=useState({
    name:"",
    email:"",
    message :""
   })   
    const handleOnchnage=(e)=>{

      const { name, value}=e.target;

      setUser((prev)=> ({...prev,[name]:value}))

    }

   const handleForm=(e)=>{
    e.preventDefault();

    const formData={
      ...user
    }

    console.log(formData);
    
   }

  return (

    <>
    <div className="container-fluid">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <form  className="col-12" onSubmit={handleForm}>
            <h1>Contact Form</h1>

            <label htmlFor="name" className='d-block'> Name</label>
            <input type="text" name="name" placeholder='Enter your Name' value={user.name} onChange={handleOnchnage } />


            <label htmlFor="email" className='d-block'> Email</label>
            <input type="text" name="email" placeholder='Enter your Email' value={user.email} onChange={handleOnchnage} />




            <label htmlFor="message" className='d-block'> Message </label>
            <textarea name="message" required rows={6} col={6} className='px-3' value={user.message} onChange={handleOnchnage}></textarea>


           <button className='px-4 btn btn-dark d-block' onClick={handleForm}>Submit</button>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact