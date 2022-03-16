import React, { useState, useEffect } from "react";
import VillagerList from "./VillagerList"

export default function VillagerContainer( {data} ) {


  
  console.log(data)

  return (
    <>
      <div style={{ textAlign: "center" }} >All Villagers</div>
      <VillagerList data={data}/>
    </>
  );
}
