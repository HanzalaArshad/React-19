import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import LoaderPage from "../Components/LoaderPage";
import { getIndCountry } from "../Api/PostApi";

const CountryDetails = () => {
  const param = useParams();
  console.log(param);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndCountry(param.id);
      console.log(res.data);

      setCountry(res.data);
    });
  }, []);

  if (isPending) return <LoaderPage />;

  return (
    <section
      className="container-fluid p-5"
      style={{ backgroundColor: "#151515" }}
    >
      <div className="container">
        <h1 className="text-center text-primary mb-5" style={{fontWeight:"700"}}>
          Country Details
        </h1>
        <div className="row justify-content-center">
          {country.map((curr, index) => (
            <div
              className="card mb-4 shadow-lg border-0"
              key={index}
              style={{
                maxWidth: "800px",
                borderRadius: "15px",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="row g-0 pt-3">
                {/* Country Flag */}
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={curr.flags.svg}
                    className="img-fluid rounded-start p-3"
                    alt={curr.name.common}
                    style={{
                      border: "2px solid #c5f371",
                      background:"black",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                {/* Country Details */}
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-warning fw-bold">
                      Name: {curr.name.common}
                    </h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>Capital:</strong> {curr.capital[0] +" , " + curr.capital[1]}
                      </li>
                      <li className="list-group-item">
                        <strong>Population:</strong> {curr.population.toLocaleString()}
                      </li>
                      <li className="list-group-item">
                        <strong>Region:</strong> {curr.region}
                      </li>
                      <li className="list-group-item">
                        <strong>SubRegion:</strong> {curr.subregion}
                      </li>
                      <li className="list-group-item">
                        <strong>Currency:</strong>{" "}
                        {curr.currencies &&
                          Object.values(curr.currencies).map((currency, idx) => (
                            <span key={idx}>{currency.name}</span>
                          ))}
                      </li>
                      <li className="list-group-item">
                        <strong>Top Level Domain:</strong> {curr.tld}
                      </li>
                      <li className="list-group-item">
                        <strong>Borders:</strong>{" "}
                        {curr.borders && curr.borders.length > 0
                          ? curr.borders.join(", ")
                          : "No borders available"}
                      </li>
                    </ul>

                    <div className="d-flex justify-content-end">
                      <button className="btn btn-warning "><NavLink className="nav-link" to="/Country">Go back</NavLink></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
