import React from 'react'
import { Carousel } from "react-bootstrap";

export default function UserVillagerCard({ userVillagers }) {


  return (


<>
<h1 className="reviews-h1" style={{ textAlign: "center" }}>Meet user created Villagers!</h1>
      <Carousel >
        {userVillagers.map((data) => (
          <Carousel.Item key={data.id}>
              <div class="card">
                <img
                  class="card-img-top"
                  src={data.image}
                  alt="Character Image"
                ></img>
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
                    {/* <Button
                      onClick={flipHandler}
                      aria-pressed="false"
                      style={{ textAlign: "center" }}
                    >
                      See less
                    </Button> */}
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
  )
}
