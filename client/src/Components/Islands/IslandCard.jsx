import React from "react";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function IslandCard() {
  const islandData = useSelector((state) => state.islands.entities);
  const visitors = useSelector((state) => [...state.visitors.entities]);

  console.log(visitors[0].island.name)
  console.log(islandData);

  const visitorLength = (visitors.map((visitor) => visitor.island.name))
  console.log(visitorLength)

  return (
    <>
      <h1 className="reviews-h1" style={{ textAlign: "center" }}>
        Visit These Islands
      </h1>

      <div class="container" style={{ textAlign: "center" }}>
        <div class="row">
          <div class="col">
            <Link to={"/add_island"}>
              <Button> Add Island </Button>
            </Link>
          </div>
          <div class="col">
            <Link to={"/add_visitors"}>
              <Button> Add Visitors </Button>
            </Link>
          </div>
        </div>
      </div>

      <Carousel>
        {islandData?.map((data) => (
          <Carousel.Item key={data.id}>
            <div class="card">
              <img
                class="card-img-top"
                src="https://thumbs.dreamstime.com/b/tropical-island-ocean-palm-trees-volcano-clip-art-illustration-lava-flowing-smoking-95612442.jpg"
                alt="Island"
              ></img>
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
                  Created By: {data.user.username}
                </li>

                {/* <li class="list-group-item" style={{ textAlign: "center" }}>
                  Personality: {data.personality}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Islands Visiting: {data.visitors.length}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Created By: {data.created_by}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  <Link to={`/villagers/${data.id}`}>
                    <Button
                      aria-pressed="false"
                      style={{ textAlign: "center" }}
                    >
                      More Info
                    </Button>
                  </Link>
                </li> */}
                <li
                  class="list-group-item"
                  style={{ textAlign: "center" }}
                ></li>
              </ul>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}