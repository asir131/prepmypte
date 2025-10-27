import React from "react";
import Coaching from "../components/coaching/Coaching";
import MasterPte from "../components/coaching/MasterPte";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Coaching />
      <MasterPte />
    </div>
  );
};

export default page;
