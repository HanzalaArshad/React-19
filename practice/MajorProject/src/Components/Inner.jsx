import React from 'react';
import inner from "../Api/inner.json";
import { MdPlace } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';

const Inner = () => {
  const Icon = {
    MdPlace: <MdPlace size={40} className="text-primary" />,
    IoCallSharp: <IoCallSharp size={40} className="text-success" />,
    TbMailPlus: <TbMailPlus size={40} className="text-danger" />
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h1 className='text-center text-white mt-3 mb-5'>Reach us </h1>
        <div className="row justify-content-center">
          {inner.map((curr, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4"
              key={index}
            >
              <div className="card text-center p-4 shadow-sm bg-warning d-flex justify-content-center align-item-center">
                <div className="mb-3">{Icon[curr.icon]}</div>
                <h4 className="card-title">{curr.title}</h4>
                <p className="card-text">{curr.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inner;
