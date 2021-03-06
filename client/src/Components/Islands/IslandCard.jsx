import React from "react";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function IslandCard() {
  const islandData = useSelector((state) => state.islands);

  console.log(islandData);

  return (
    <>
      <h1 className="reviews-h1" style={{ textAlign: "center" }}>
        Visit These Islands
      </h1>

      <div class="container" style={{ textAlign: "center" }}>
        <div class="row">
          <div class="col">
            <Link to={"/add_island"}>
              <Button style={{ backgroundColor: "#c68483" }}>
                Build your Dream Island
              </Button>
            </Link>
          </div>
          <div class="col">
            <Link to={"/add_visitors"}>
              <Button style={{ backgroundColor: "#c68483" }}>
                {" "}
                Invite some Friends{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Carousel style={{ backgroundColor: "#f7f1b6" }}>
        {islandData.map((data) => (
          <Carousel.Item key={data.id}>
            <div class="card" style={{ fontFamily: "FinkHeavy" }}>
              <img class="card-img-top" src={data.image} alt="Island"></img>
              <div class="card-body">
                <h5 class="card-title" style={{ textAlign: "center" }}>
                  {data.name}
                </h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Visitors: {data.visitors.length}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  List Visitors:{" "}
                  <ul>
                    {" "}
                    {data.villagers.map((villager) => (
                      <li> {villager.name} </li>
                    ))}{" "}
                  </ul>
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Created By: {data.user["username"]}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  <Link to={`/islands/${data.id}`}>
                    <Button
                      aria-pressed="false"
                      style={{
                        textAlign: "center",
                        backgroundColor: "#c68483",
                      }}
                    >
                      More Info
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
