import React, { useState } from 'react';

const App = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    password :"",
    phone:"",
  });

  const handleonchage = (e) => {
    const { name, value } = e.target;

    setUser((prev)=>( {...prev,[name]:value}))

  };

  const handleForm=(e)=>{
    e.preventDefault();

    const formdata={
      ...user
    };

    console.log(formdata);
    
  }

  return (
    <>
      <div className="border w-70" >
        <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleForm}>
          <h1 className="text-center">Registration Form</h1>

          <div className="row">
            <div className="col-12">
              <label htmlFor="Name" className="d-block">
                <b>Name </b>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={user.name}
                onChange={handleonchage}
                required
              />

              <label htmlFor="Email" className="d-block">
                <b>Email </b>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={user.email}
                onChange={handleonchage}
                required
              />

              <label htmlFor="password" className="d-block">
                <b>Password </b>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleonchage}
                required
              />

              <label htmlFor="phoneNumber" className="d-block">
                <b>Phone Number </b>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={user.phone}
                onChange={handleonchage}
                required
              />

              <button className='btn btn-success' onClick={handleForm}>form</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
