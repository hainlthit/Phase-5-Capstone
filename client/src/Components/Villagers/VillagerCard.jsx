import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { Carousel } from "react-bootstrap";


export default function VillagerCard() {

  const [flipCard, setFlipCard] = useState(true);

  function flipHandler() {
    setFlipCard(!flipCard);
  }

  const animals = [
    {
      id: 1,
      image: "https://acnhapi.com/v1/icons/villagers/1",
      name: "fake review",
      personality: "john doe"
  
    },
    {
      id: 2,
      image: "https://acnhapi.com/v1/icons/villagers/1",
      content: "fake review",
      author: "jane doe"
    },
    {
      id: 3,
      image: "https://acnhapi.com/v1/icons/villagers/1",
      content: "fake review",
      author: "dane doe"
    }
  ]

  return (
    <>
      <h1 className="reviews-h1">Carousel Test</h1>
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
      )}
    </>
  );
}
