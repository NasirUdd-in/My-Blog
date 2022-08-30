import React from "react";
import Moment from "moment";
import Image from "next/image";
import Author from "../Author/Author";
import Newsletter from "../Newsletter/Newsletter";

const ArticleBody = () => {
  const formatDate = Moment().format("MMM Do YY");
  return (
    <div className="container mx-auto px-6 ">
      <div className="grid grid-cols-2 gap-4">
        <div>
      <h5 className="text-xl mt-5">Go to previous page</h5>
      <h6 className="mt-10 mb-3 bg-indigo-400 w-20 p-2 text-white text-base">
        ARTICLE
      </h6>
      <h1 className="text-2xl font-bold mb-5">
        How did van Goghs Turbulent MInd Depict One of the MOst Complex Concept
        in physics?
      </h1>
      <p className="font-light inline">By Laly Liy on {formatDate} </p>
      <h6 className="font-light inline">Save this article</h6>

      <p className="mt-5">
        Physics aims to observe and explain the behaviour of the physical
        universe. It looks for laws which apply everywhere and to everything.
        One of the joys of physics is seeing how a simple principle, established
        after studying one problem, can go on to explain seemingly unrelated
        phenomena.
      </p>

      <h2 className="mt-10 mb-5">Summary</h2>
      <p>
        The University of Warwick uses the information that you provide on this
        form to register you as someone who has in interest in finding out more
        about studying here and subject(s) of interest. We also use the
        information to record where our potential future students live, how you
        heard about us, to communicate with you and keep you informed about
        events. We gather statistics around email opening and clicks using
        industry standard technologies including transparent gifs to help us
        monitor and improve our communications.
      </p>
      <Image></Image>

      <p className="mt-10">
        The University of Warwick uses the information that you provide on this
        form to register you as someone who has in interest in finding out more
        about studying here and subject(s) of interest. We also use the
        information to record where our potential future students live, how you
        heard about us, to communicate with you and keep you informed about
        events. We gather statistics around email opening and clicks using
        industry standard technologies including transparent gifs to help us
        monitor and improve our communications.
      </p>

      <h1 className="xl mt-10 mb-5 font-bold text-xl">Article tags</h1>

      <button className="mb-5 mr-2 py-2 px-4 border-2 border-slate-300 rounded">
        Graphic Design
      </button>
      <button className="mb-5 mr-2 py-2 px-4 border-2 border-slate-300 rounded">
        Magento
      </button>
      <button className="mb-5 mr-2 py-2 px-4 border-2 border-slate-300 rounded">
        Project Management
      </button>
      <button className="mb-5 mr-2 py-2 px-4 border-2 border-slate-300 rounded">
        Marketing
      </button>
      </div>
      <div className="mt-64 pl-5 border-l-2 border-slate-200">
      <Author/>
      <Newsletter/>
      </div>
      
      </div>
     
    </div>
  );
};

export default ArticleBody;
