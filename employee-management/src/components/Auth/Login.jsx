import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    setEmail("")
    setPassword("")
    
  };
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center"
        >
          <input
            required
            className="border-2 text-lg text-white outline-none bg-transparent  border-emerald-600 px-8 py-2 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            required
            className="border-2 text-lg mt-4 text-white outline-none bg-transparent  border-emerald-600 px-8 py-2 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <button className="border-2 text-xl mt-5   text-black font-semibold outline-none bg-emerald-600  border-emerald-600 px-5 py-1 rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
