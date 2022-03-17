import React, { useState } from "react";
import VillagerCard from "./VillagerCard";
import UserVillagerCard from "./UserVillagerCard";
import { Button } from "react-bootstrap";

export default function VillagerList({ villagerData , userVillagers }) {
  
  const [flip, setFlip] = useState(true);

  function flipTrue() {
    setFlip(true);
  }
  function flipFalse() {
    setFlip(false);
  }
  return (
    <>
      <div class="container" style={{ textAlign: "center" }}>
        <div class="row">
          <div class="col">
            <Button onClick={flipTrue}> Random </Button>
          </div>
          <div class="col">
            <Button onClick={flipFalse}> Users </Button>
          </div>
        </div>
      </div>
      {flip ? (
        <div>
          <h1 style={{ textAlign: "center" }}> Random Villagers </h1>
          <VillagerCard villagerData={villagerData} />
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}> User Created Villagers </h1>
          <UserVillagerCard userVillagers={userVillagers} />
        </div>
      )}
    </>
  );
}
