import axios from "axios";

const api=axios.create({
  baseURL:"https://www.omdbapi.com/"
});

export const getMovie=()=>{
  return api.get("?i=tt3896198&apikey=5e8ce37f&s=superman&page=1  ")
}