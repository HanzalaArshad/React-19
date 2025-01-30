import React, { useEffect, useState } from 'react'
import { getPost } from '../api/PostApi';
import PostCards from './PostCards';
import Form from './Form';

const Post = () => {


  const [data,setData]=useState([]);

  
  const [updateApi,setUpdateApi]=useState({});


    
  const getData=async()=>{
    const res=await getPost();
    setData(res.data)
    
  }

  useEffect(()=>{
      getData();
  },[])

  

  return (
     <>
     <section className='text-center mt-4'>
      <Form data={data} setData={setData} updateApi={updateApi} setUpdateApi={setUpdateApi} />
     </section>
    <div className='container d-flex justify-content-center align-items-center'>
      <ul className='row '>
        {
          data.map((curr)=>{

            return <PostCards key={curr.id} postdata={curr} data={data} setData={setData} updateApi={updateApi} setUpdateApi={setUpdateApi}/>
          })

        }
      </ul>
    </div>
    </>
  )
}

export default Post