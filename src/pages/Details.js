import React from "react";
import { Link } from "react-router-dom";


export const Details = (dog) => {
  return (
    <div>
      <h1>bred_for</h1>
      <p>{dog.bred_for}</p>
      <h1>breed_group</h1>
      <h1>height</h1>
      <h1>id</h1>
      <h1>image</h1>
      <h1>life_span</h1>
      <h1>name</h1>
      <h1>reference_image_id</h1>
      <h1>temperament</h1>
      <h1>weight</h1>
      <Link to="/">Home</Link>
    </div>
  );
};
