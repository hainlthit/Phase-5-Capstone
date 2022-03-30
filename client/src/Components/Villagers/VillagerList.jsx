import React, { useState } from "react";
import VillagerCard from "./VillagerCard";
import UserVillagerCard from "./UserVillagerCard";
import { Button } from "react-bootstrap";

export default function VillagerList() {
  
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
            <Button  style={{ backgroundColor: "#c68483" }} onClick={flipTrue}> Villagrr </Button>
          </div>
          <div class="col">
            <Button  style={{ backgroundColor: "#c68483" }}  onClick={flipFalse}> Villagers Ready for a Home </Button>
          </div>
        </div>
      </div>
      {flip ? (
        <div>
          <h1 style={{ textAlign: "center" }}> Swipe Thru </h1>
          <VillagerCard />
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}> Take me to your island! </h1>
          <UserVillagerCard  />
        </div>
      )}
    </>
  );
}
