import Image from "next/image";
import React from "react";

const Author = () => {
  return (
    <div>
      <h1>About the author</h1>
      {/* <Image></Image> */}
      <h2>Katy Liu</h2>

      <p>
        A tone that reflects the type of writing you do. An attention-grabbing,
        opening one-liner that sums up you and your work. Including information
        about your experience and/or accolades to build credibility. A story
        that keeps readers hooked.
      </p>


        <h1 className="mt-20">Popular Posts</h1>

        <p className="mt-10">Contrary to popular belief, Lorem Ipsum</p>

        <p>Contrary to popular belief, Lorem Ipsum</p>

        <p>Contrary to popular belief, Lorem Ipsum</p>

        <p>Contrary to popular belief, Lorem Ipsum</p>

        <p>Contrary to popular belief, Lorem Ipsum</p>

    </div>
  );
};

export default Author;
