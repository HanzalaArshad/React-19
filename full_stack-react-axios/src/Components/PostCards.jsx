import React from 'react';
import { deletePost } from '../api/PostApi';

const PostCards = ({ postdata, data, setData, setUpdateApi }) => {

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatedData = data.filter((curr) => {
          return curr.id !== id;
        });
        setData(updatedData);  // Updating the state with filtered posts
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePost = () => setUpdateApi(postdata);  // Correctly set updateApi
  
  return (
    <div className="mb-3 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">{postdata.id}</h5>
          <p className="card-text fs-6" style={{ fontWeight: "500" }}>{postdata.title}</p>
          <p className="card-text mt-5">{postdata.body}</p>
          <button className="btn btn-success" onClick={handleUpdatePost}>Edit</button>  {/* Improved button */}
          <button 
            className="btn btn-danger mx-4" 
            onClick={() => handleDeletePost(postdata.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCards;
