import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function VisitorsCard() {
  const visitors = useSelector((state) => state.visitors.entities);
  console.log(visitors);

  return (
    <>
      <Carousel >
        {visitors?.map((data) => (
          <Carousel.Item key={data.id}>
            <div class="card" style={{ fontFamily: "FinkHeavy" }}>
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
                  Visiting: {data.island["name"]}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  <Link to={`/visitors/${data.id}`}>
                    <Button
                      aria-pressed="false"
                      style={{
                        textAlign: "center",
                        backgroundColor: "#c68483",
                      }}
                    >
                     Send them packing
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
