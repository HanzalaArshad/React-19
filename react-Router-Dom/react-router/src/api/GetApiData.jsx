export const getMoviesData= async()=>{

  try {

    const response =await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=superman&page=1`)
    const data=await response.json();
    return data

    
  } catch (error) {
     console.log(error);
     
  }

}
