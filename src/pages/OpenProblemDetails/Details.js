import { useLoaderData } from "react-router-dom";
import { useEffect, useRef } from "react";
import Classification from "./InformationInterface/Classification";
import References from "./InformationInterface/References";
import RelatedProblems from "./InformationInterface/RelatedProblems";
import Proposals from "./Proposals/Proposals";
function Details() {
  const { data } = useLoaderData();
  const openProblemDetails = data.open_problem;
  const id = openProblemDetails.question_id;
  const title = openProblemDetails.title;
  const children = openProblemDetails.children;

  // Select the title of the open problem to use as the anchor for the scrollToView function
  const ref = useRef(null);
  const scrollTo = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollTo();
  }, []);

  return (
    <div>
      <hr className="border-1 border-theme-blue" />
      <div ref={ref} className="title flex flex-row pt-8 ">
        <h1 className="text-lg md:text-2xl">
          Open Problem {id}: <u>{title}</u>{" "}
        </h1>
      </div>
      <div className="details py-2">
      <Classification/>
      <RelatedProblems children={children}/>
      <References/>
      </div>
      <hr className="border-1 border-theme-blue mt-10" />
      <div className="research-and-proposals-title pt-8">
        <h1 className="text-lg md:text-2xl pb-6">Research and Solutions</h1>
        <p className="pb-2 font-semibold">User submitted solutions or additional literature/research to address the open problem at hand.</p>
      </div>
      <div className="research-and-proposals">
      <Proposals/>
      </div>

    </div>
  );
}

export default Details;
