import React from "react";
import VillagerList from "./VillagerList"

export default function VillagerContainer( {data, userVillagers } ) {


  
  console.log(data)

  return (
    <>
      <div style={{ textAlign: "center" }} >All Villagers</div>
      <VillagerList data={data} userVillagers={userVillagers} />
    </>
  );
}
