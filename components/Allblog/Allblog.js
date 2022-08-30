import React from "react";
import { useState, useEffect } from "react";
import Singleblog from "../Singleblog/Singleblog";

const Allblog = ({ age }) => {
  const [blogs, setBlogs] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(() => {
    let url = "/blog.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  const result = blogs.filter((blog) => blog.topics === age);

  return (
    <div className=" flex  justify-center items-center">
      {/* <ul>
        {result.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul> */}
      
      {result.map((post) => (
          <Singleblog post={post} key={post.id}></Singleblog>
        ))}

   

      {/* <h1>shakil: {result.length}</h1> */}
    </div>
  );
};

export default Allblog;
