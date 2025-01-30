import React, { useEffect, useState, useTransition } from "react";
import { getCountry } from "../Api/PostApi";
import LoaderPage from "../Components/LoaderPage";
import CountryCard from "../Components/CountryCard";
import SearchFilter from "../Components/SearchFilter";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]); // Original country list
  const [displayCountries, setDisplayCountries] = useState([]); // Displayed countries after search

  const [search, setSearch] = useState(""); // User input
  const [filter, setFilter] = useState("all"); // Selected region filter

  // Filter and Search Logic
  const applyFilters = () => {
    const filtered = countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter = filter === "all" || country.region === filter;
      return matchesSearch && matchesFilter;
    });
    setDisplayCountries(filtered); // Update displayed countries
  };


  // sorting 

  const handleSort = (order) => {
    const sorted = [...displayCountries].sort((a, b) => {
      if (order === "asc") {
        return a.name.common.localeCompare(b.name.common);
      } else if (order === "desc") {
        return b.name.common.localeCompare(a.name.common);
      }
      return 0; // No sorting if no valid order is passed
    });
    setDisplayCountries(sorted); // Update the displayed countries with sorted data
  };
  
  // Fetch Countries
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountry();
      setCountries(res.data || []); // Store fetched countries
      setDisplayCountries(res.data || []); // Initially show all countries
    });
  }, []);

  if (isPending) return <LoaderPage />;

  return (
    <section className="container-fluid" style={{ backgroundColor: "black" }}>
      <h1 className="text-white text-center pt-5" style={{ fontWeight: "700" }}>
        Countries
      </h1>

      {/* Search Filter */}
      <SearchFilter
  search={search}
  setSearch={setSearch}
  filter={filter}
  setFilter={setFilter}
  onSearch={applyFilters} // Trigger filters on button click
  onSort={handleSort} // Pass the sorting handler
/>

      {/* Country Cards */}
      <div className="container">
        <div className="row">
          {displayCountries.length > 0 ? (
            displayCountries.map((country,index) => (
              <CountryCard key={index} country={country} />
            ))
          ) : (
            <section className="container-fluid h-100 w-100 p-5 ">

              <div className="container d-flex justify-content-center align-items-center">
              <h3 className=" text-white p-5">Sorry, invalid country</h3>
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}

export default Country;
