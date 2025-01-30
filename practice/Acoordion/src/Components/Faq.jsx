import React, { useState } from 'react'

const Faq = ({currData,active,onToggle }) => {
  
  const {answer,question}=currData;


  const handleToggle=()=>{
    setActive(!active)
  }

  return (
    <li>
    <div className=" d-flex justify-content-between mb-3 ">
      <p className="">{question}</p>
      <button className={`btn ${active ? "btn-danger" : "btn-success"}`}onClick={onToggle}> {active?"Close":"show"}
      </button>
    </div>
    <p>{active?answer:""}</p>
  </li>
)
}

export default Faq