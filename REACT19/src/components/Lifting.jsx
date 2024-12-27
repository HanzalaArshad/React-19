import { useState } from "react";

export const Lifting = () => {
   
  const [inputValue,setInputValue]=useState();

  return (
    <>
      <InputComponent inputValue={setInputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p>The current Value for this is: {inputValue} </p>;
};