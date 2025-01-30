import React from 'react'

const Contact = () => {

  const handleFormSubmit=(formdata)=>{

    const formInput=Object.fromEntries(formdata.entries());

    console.log(formInput);
    

  }
  return (



    <>
    <div className="container-fluid pb-5" style={{backgroundColor:"black"}}>
      <div className="container pb-5">
        <div className="row  pt-5">
          <div className="col-12" >
            <h1 className=' text-center text-white'>Contact Us</h1>
               



             </div>
          </div>
      </div>
      
      <div className="container d-flex justify-content-center align-item-start">
      <div className="row p-5">

        <div className="col-lg-6">
        <form action={handleFormSubmit} className='d-flex justify-content-center  p-5 px-5 align-item-center flex-column mt-4' style={{border:"1px solid yellow"}}>
             <label htmlFor="username" className='text-white px-1 d-block mb-3'>Name</label>
             <input className='bg-black w-100 px-3 py-1 rounded text-white ' style={{border:"1px solid #e5d306"}} type="text" required name='username' placeholder="Enter Your Name" autoComplete='false'  />

             
             <label htmlFor="email" className='text-white px-1 mt-3 d-block mb-3'>Email</label>
             <input className='bg-black w-100 px-3 py-1 rounded text-white mb-3 ' style={{border:"1px solid #e5d306"}} type="email" required name='email' placeholder="Enter Your Email" autoComplete='false'  />

              
             <label htmlFor="phone" className='text-white px-1 d-block mb-3'>Phone Number</label>
             <input className='bg-black w-100 px-3 py-1 rounded text-white ' style={{border:"1px solid #e5d306"}} type="number" required name='phone' placeholder="Enter Your Phone Number" autoComplete='false'  />

             
             <label htmlFor="message" className='text-white px-1 d-block mb-3 mt-4'>Message</label>
             <textarea className='bg-black w-100 px-3 py-1 rounded text-white ' style={{border:"1px solid #e5d306"}} type="text" required name='message' placeholder="Enter Your Message" row="20" autoComplete='false'  />



             <button className='btn btn-warning w-50 mt-5' style={{color:"black",fontWeight:"bold",   }}> SUBMIT </button>

             </form>
        </div>
        <div className="col-lg-6">
          <figure>
            <img src="world.png" alt="" className='img-fluid' />
          </figure>
        </div>

      </div>
      </div>
    </div>
    </>
  )
}

export default Contact