import seriesData from "../api/seriesData.json";
import SeriesData from "./SeriesData";
import "./Netflix.css"

const Netflix = () => {
  const name = "the lost book";

  const rating = 7.2;

  const returngenre = () => {
    const genre = "romcom";
    return genre;
  };
  let age = 10;

  let canwatch = "not available";

  if (age >= 18) canwatch = "watch now";

  const watch = () => {
    if (age >= 18) return "watch";

    return "not available";
  };
  return (
    <>
      <ul className=" grid grid-three-cols">
        {seriesData.map((currelem) => (
        
            <SeriesData  key={currelem.id} currelem={currelem}/>
        
        ))}
      </ul>
    </>
  );
};

export default Netflix;

export const Footer = () => {
  return <p>all rights reserved @hanzalaArshad</p>;
};
