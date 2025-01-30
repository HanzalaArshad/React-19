import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleonChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault();

    const formData = { ...user };
    console.log(formData);

    // Reset form to initial state
    setUser({ email: '', password: '' });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <form
              className="col-12 border mt-5 p-5 rounded-lg"
              style={{ backgroundColor: 'skyblue' }}
              onSubmit={handleForm}
            >
              <h1 className="text-center">Login Form</h1>

              <label htmlFor="email" className="d-block">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleonChange}
                required
              />

              <label htmlFor="password" className="d-block">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleonChange}
                required
              />

              <button type="submit" className="btn btn-dark d-block mt-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
