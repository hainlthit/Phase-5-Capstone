import React from "react";
import VillagerList from "./VillagerList"

export default function VillagerContainer( {villagerData, userVillagers } ) {


  
  console.log(villagerData)

  return (
    <>
      <div style={{ textAlign: "center" }} >All Villagers</div>
      <VillagerList villagerData={villagerData} userVillagers={userVillagers} />
    </>
  );
}
