import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchFilter = ({ search, setSearch, filter, setFilter, onSearch,onSort  }) => {


  
  return (
    <section className="container-fluid">
      <div className="container">
        <div className="row">
          {/* Search Input */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 d-flex jusitfy-content-center align-items-center ">
            <div className="input-group  ">

              <div className="d-flex justify-content-center align-item-center gap-1">
              <input
                className="w-100 rounded px-3 py-1"
                type="text"
                placeholder="Search here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                
              />
              <button
                className="btn btn-primary d-flex justify-content-center align-items-center  text-white py-1"
                onClick={onSearch} // Trigger search on click
              >
                <FaSearch />
              </button>
              </div>
              
              
            </div>
          </div>
           
           <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
           <button className="btn btn-success px-3 py-1" onClick={() => onSort("asc")}>Sort Ascending</button>

           </div>

           
           <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
           <button className="btn btn-warning px-3 py-1" onClick={() => onSort("desc")}>Sort Descending</button>

           </div>
                       

          {/* Filter Dropdown */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <select
              className="px-2 rounded bg-dark text-white"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
