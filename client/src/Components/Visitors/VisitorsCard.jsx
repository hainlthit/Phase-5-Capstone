import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";

export default function VisitorsCard() {
  const visitors = useSelector((state) => state.visitors.entities);
  console.log(visitors);

  return (
    <>
      <Carousel>
        {visitors?.map((data) => (
          <Carousel.Item key={data.id}>
            <div class="card">
              <img
                class="card-img-top"
                src={data.villager["image"]}
                alt="Character"
              ></img>
              <div class="card-body">
                <h5 class="card-title" style={{ textAlign: "center" }}>
                  {data.villager["name"]}
                </h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Visiting Island : {data.island["name"]}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  {/* <Link to={`/villagers/${data.id}`}>
                    <Button
                      aria-pressed="false"
                      style={{ textAlign: "center" }}
                    >
                      More Info
                    </Button>
                  </Link> */}
                </li>
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
