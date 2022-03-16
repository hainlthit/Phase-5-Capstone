import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export default function VillagerCard( { data }) {
  const [flipCard, setFlipCard] = useState(true);

  function flipHandler() {
    setFlipCard(!flipCard);
  }

  const animals = [
    {
      id: 1,
      image: "https://acnhapi.com/v1/icons/villagers/1",
      image2: "https://acnhapi.com/v1/images/villagers/1",
      name: "Cyrano",
      personality: "Cranky",
      birthday: "9/3",
      species: "Anteater",
    },
    {
      id: 2,
      image: "https://acnhapi.com/v1/icons/villagers/2",
      image2: "https://acnhapi.com/v1/images/villagers/2",
      name: "Bobby",
      personality: "Nice",
      birthday: "9/4",
      species: "Anteater",
    },
    {
      id: 3,
      image: "https://acnhapi.com/v1/icons/villagers/3",
      image2: "https://acnhapi.com/v1/images/villagers/3",
      name: "Tina",
      personality: "Cranky",
      birthday: "9/3",
      species: "Anteater",
    },
  ];

  return (
    <>
      <h1 className="reviews-h1">Carousel Test</h1>
      <Carousel>
        {data.map((data) => (
          <Carousel.Item key={data.id}>
            {flipCard ? (
              <div class="card">
                <img class="card-img-top" src={data.icon_uri} alt="Icon Image"></img>
                <div class="card-body">
                  <h5 class="card-title" style={{ textAlign: "center" }}>
                    {data.name["name-USen"]}
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
                  {data.name["name-USen"]}
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

{
  /* <h1 className="reviews-h1">Carousel Test</h1>
{flipCard ? (
  <div class="card">
    <img
      class="card-img-top"
      src="https://acnhapi.com/v1/icons/villagers/1"
      alt="Cyrano"
    ></img>
    <div class="card-body">
      <h5 class="card-title">Cyrano</h5>
    </div>
    <div class="card-body">
      <Button onClick={flipHandler} aria-pressed="false" >See more details</Button>
    </div>
  </div>
) : (
  <div  class="card">
    <img
      class="card-img-top"
      src="https://acnhapi.com/v1/images/villagers/1"
      alt="Cyrano"
    ></img>
    <div class="card-body">
      <h5 class="card-title">Cyrano</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">birthday: 9/3</li>
      <li class="list-group-item">species: Anteater</li>
      <li class="list-group-item">personality: Cranky</li>
    </ul>
    <div class="card-body">
      <Button aria-pressed="false" onClick={flipHandler} >Return</Button>
    </div>
  </div>
)} */
}
