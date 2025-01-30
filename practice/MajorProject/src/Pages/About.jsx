import React from "react";
import CountryFacts from "../Api/country.json";

const About = () => {
  return (
    <>
      <section className="container-fluid " style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center text-white mt-5">
                Our Mission Driven by Passion for Discovery
              </h1>
              <p className="text-center text-white mt-3 fs-4">
                Here You Will be Get Intresting Facts
              </p>
            </div>
          </div>

            <div className="row pt-5">
              {CountryFacts.map((curr) => {
                return (
                  <div key={curr.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 d-flex justify-content-center align-item-center">
                    <div className="card mt-5" style={{width: "20rem",backgroundColor:"#5756564c", borderTop:"0.2px solid yellow"}}>
                      <div className="card-body ">
                        <h5 className="card-title text-white fs-2" >{curr.name}</h5>
                        <p className="card-text text-white"><span style={{fontWeight:"700"}}>Population:</span> {curr.population}</p>
                        <p className="card-text text-white"><span style={{fontWeight:"700"}}>Capital:</span> {curr.capital}</p>
                        <p className="card-text text-white"><span style={{fontWeight:"700"}}>officialLanguage:</span> {curr.officialLanguage}</p>

                        <p className="card-text text-white"><span style={{fontWeight:"700"}}>Currency:</span> {curr.currency}</p>

                        <p className="card-text text-white "><span style={{fontWeight:"700"}}>InterestingFacts:</span> {curr.interestingFacts}</p>

                        
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
