import React from "react";
import VillagerCard from "./VillagerCard";

export default function VillagerList({ data }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}> Random Villagers </h1>
      <VillagerCard data={data} />
      <h1 style={{ textAlign: "center" }} > User Created Villagers </h1>
    </>
  );
}
