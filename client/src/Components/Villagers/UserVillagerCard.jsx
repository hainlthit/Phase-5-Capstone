import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function UserVillagerCard() {
  const userVillagers = useSelector((state) => state.newVillagers);

  return (
    <>
      <h1 className="reviews-h1" style={{ textAlign: "center" }}>
        Villagers ready to go on Vacation
      </h1>
      <Link to={"/add_villager"}>
        <Button style={{ backgroundColor: "#c68483" }}> Add Villager </Button>
      </Link>
      <Carousel>
        {userVillagers.map((data) => (
          <Carousel.Item key={data.id}>
            <div class="card">
              <img class="card-img-top" src={data.image} alt="Character"></img>
              <div class="card-body">
                <h5 class="card-title" style={{ textAlign: "center" }}>
                  {data.name}
                </h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Birthday: {data.birthday}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Species: {data.species}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Personality: {data.personality}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Created By: {data.created_by}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  <Link to={`/villagers/${data.id}`}>
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

export default UserVillagerCard;
