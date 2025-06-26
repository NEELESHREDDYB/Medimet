import React, { Children } from "react";

const Authlayout = ({ Children }) => {
  return <div className="flex justify-centre pt-40">{Children}</div>;
};

export default Authlayout;
