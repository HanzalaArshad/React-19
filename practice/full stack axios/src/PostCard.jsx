import React from "react";
import { DeleteData } from "./API/getForm";

const PostCard = ({ postdata,data,setData }) => {



  const handleDelete=async(id)=>{

     try {
       const res=await DeleteData(id);
       if(res.status===200){
        const updatedData=data.filter((curr)=> {
         return    curr.id !== id;
        })

        setData(updatedData)
       }

     } catch (error) {
       console.log(error);
       
     }
  }
  return (
    <div className="mb-3 col-lg-4 col-md-6 col-sm-12">
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">{postdata.id}</h5>
          <p className="card-text fs-6" style={{ fontWeight: "500" }}>
            {postdata.title}
          </p>
          <p className="card-text mt-5">{postdata.body}</p>
          <button className="btn btn-success">Edit</button>
          <button className="btn btn-danger mx-4" onClick={()=>handleDelete(postdata.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
