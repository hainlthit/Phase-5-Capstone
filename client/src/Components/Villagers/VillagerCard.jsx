import React, { useState } from "react";


export default function VillagerCard() {

  const [flipCard, setFlipCard] = useState(true);

  function flipHandler() {
    setFlipCard(!flipCard);
  }

  return (
    <>
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
            <button onClick={flipHandler} >See more details</button>
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
            <button aria-pressed="false" onClick={flipHandler} >Return</button>
          </div>
        </div>
      )}
    </>
  );
}
