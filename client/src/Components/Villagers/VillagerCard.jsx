import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function VillagerCard() {
  const [flipCard, setFlipCard] = useState(true);

  function flipHandler() {
    setFlipCard(!flipCard);
  }
  
  const villagerData = useSelector((state) => [...state.villagers.entities]);

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  shuffle(villagerData);
  console.log(villagerData)

  return (
    <>
      <h1 className="reviews-h1" style={{ textAlign: "center" }}>Meet a random Villager!</h1>
      <Carousel >
        {villagerData.map((data) => (
          <Carousel.Item key={data.id}>
            {flipCard ? (
              <div class="card">
                <img
                  class="card-img-top"
                  src={data.icon_uri}
                  alt="Icon Image"
                ></img>
                <div class="card-body">
                  <h5 class="card-title" style={{ textAlign: "center" }}>
                    {data.name['name-USen']}
                  </h5>
                  <div class="card-body" style={{ textAlign: "center" }}>
                    <Button onClick={flipHandler} aria-pressed="false">
                      See more details
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div class="card">
                <img
                  class="card-img-top"
                  src={data.image_uri}
                  alt="Character Image"
                ></img>
                <div class="card-body">
                  <h5 class="card-title" style={{ textAlign: "center" }}>
                  {data.name['name-USen']}
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
                    <Button
                      onClick={flipHandler}
                      aria-pressed="false"
                      style={{ textAlign: "center" }}
                    >
                      See less
                    </Button>
                  </li>
                  <li
                    class="list-group-item"
                    style={{ textAlign: "center" }}
                  ></li>
                </ul>
              </div>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}


