import React, { useEffect, useState } from "react";
import { getData } from "./API/getForm";
import PostCard from "./PostCard";

const Post = () => {
  const [data, setData] = useState([]);

  const ApiData = async () => {
    const res = await getData();
    setData(res.data);
  };

  useEffect(() => {
    ApiData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((curr) => (
          <PostCard key={curr.id} postdata={curr} data={data} setData={setData}/>
        ))}
      </div>
    </div>
  );
};

export default Post;
