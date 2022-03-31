import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function VillagerCard() {
  const users = useSelector((state) => state.users.entities);

  console.log(users.username);

  const villagerData = useSelector((state) => [...state.villagers]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  shuffle(villagerData);
  console.log(villagerData);

  return (
    <>
      <h1 className="reviews-h1" style={{ textAlign: "center" }}>
        Meet a random Villagrr!
      </h1>
      <Carousel>
        {villagerData.map((data) => (
          <Carousel.Item key={data.id}>
            <div class="card" style={{ fontFamily: "FinkHeavy" }}>
              <img
                class="card-img-top"
                src={data.image_uri}
                alt="Character"
              ></img>
              <div class="card-body">
                <h5 class="card-title" style={{ textAlign: "center" }}>
                  {data.name["name-USen"]}
                </h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Birthday: {data["birthday-string"]}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Species: {data.species}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  Personality: {data.personality}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  <Link to={`/save_villager/${data.id}`}>
                    <button  style={{ backgroundColor: "#c68483" }} > Add Villager </button>
                  </Link>{" "}
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
