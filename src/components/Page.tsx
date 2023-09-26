import React from "react";
import { useParams } from "react-router-dom";

const Page: React.FC = () => {
  const { pageNumber } = useParams();

  return (
    <div>
      <h2>Page {pageNumber}</h2>
    </div>
  );
};

export default Page;
