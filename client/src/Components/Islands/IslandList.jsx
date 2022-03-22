import React, { useState } from "react";
import IslandCard from "./IslandCard";

import { Button } from "react-bootstrap";

export default function IslandList() {
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
            <IslandCard />
          </div>
        ) : (
          <div>
            <h1 style={{ textAlign: "center" }}> User Created Villagers </h1>
            <IslandCard  />
          </div>
        )}
      </>
    );
}
