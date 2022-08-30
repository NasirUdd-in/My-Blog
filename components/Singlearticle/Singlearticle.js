import Image from "next/image";
import React from "react";
import Moment from "moment";

const Singlearticle = () => {
  const formatDate = Moment().format("MMM Do YY");
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Image src="/picfour.jpg" alt="nasir" width="500" height="500" />
        </div>
        <div>
          <p>{formatDate}</p>
          <h1 className="font-bold text-2xl lg:my-5">
            Faster ML Experimentation at Etsy with Interleaving
          </h1>
          <p className="lg:my-5">The Fireship Team</p>
          <h3>
            Consider how we might test a new algorithm (or “model” or “ranker”)
            built to produce search results (a set of listings in a certain
            order). In an A/B test, visitors are randomly bucketed into one of
            two groups. Group A (control) is served the results produced by the
            old algorithm and group B (variant) is served the results produced
            by the new algorithm. We calculate average behaviors of the control
            and variant groups separately, and run a statistical comparison. If
          </h3>
          <h6 className="lg:my-5 text-indigo-600">Read More</h6>
        </div>
      </div>
      <div className="flex  justify-center items-center my-4">
        View all articles
      </div>
    </div>
  );
};

export default Singlearticle;
