import React from "react";

import VisitorsCard from "./VisitorsCard";

export default function VisitorsList() {
  return (
    <>
    <h2 style={{ textAlign: "center" }}>All Visitors</h2>
      <div>
        {" "}
        <VisitorsCard />
      </div>
    </>
  );
}
