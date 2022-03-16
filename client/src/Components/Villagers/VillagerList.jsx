import React from "react";
import VillagerCard from "./VillagerCard";

export default function VillagerList({data}) {
  
  return (
    <>
      <div>VillagerList</div>
      <VillagerCard data={data} />
    </>
  );
}
