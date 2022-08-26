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
    <div className="flex h-20 justify-center items-center bg-red">
      {/* <ul>
        {result.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul> */}
      
      {result.map((post) => (
          <Singleblog post={post}></Singleblog>
        ))}

   

      {/* <h1>shakil: {result.length}</h1> */}
    </div>
  );
};

export default Allblog;
