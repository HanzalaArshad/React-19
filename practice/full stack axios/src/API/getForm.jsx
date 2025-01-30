import axios from "axios";

const api=axios.create({
  baseURL:"https://jsonplaceholder.typicode.com"
})

export const getData=()=>{

  return api.get("/posts")
}

export const DeleteData=(id)=>{
  return api.get(`/posts/${id}`)
};