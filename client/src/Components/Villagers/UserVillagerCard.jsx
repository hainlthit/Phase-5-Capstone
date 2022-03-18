import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteVillager } from "./newVillagersSlice";
import newVillagerDataService from "../../services/newVillagerServices";

const UserVillagerCard = (props) => {
  // const initialVillagerState = {
  //   id: null,
  //   name: "",
  //   species: "",
  //   birthday: "",
  //   personality: "",
  //   image: "",
  //   likes: "",
  //   created_by: "",
  // };

  // const [currentVillager, setCurrentVillager] = useState(initialVillagerState);

  // const getVillager = (id) => {
  //   newVillagerDataService
  //     .get(id)
  //     .then((response) => {
  //       setCurrentVillager(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // // useEffect(() => {
  // //   getVillager();
  // // }, []);

  // console.log(currentVillager);

  // console.log(userVillagers)

  // const dispatch = useDispatch();

  // const handleDelete = (data) => {
  //   dispatch(deleteVillager({ id: data.id }))
  //     .unwrap()
  //     .then(() => {
  //       props.history.push("/villagers");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };


  const userVillagers = useSelector((state) => state.newVillagers);




  return (
    <>
      <h1 className="reviews-h1" style={{ textAlign: "center" }}>
        Meet user created Villagers!
      </h1>
      <Link to={"/add_villager"}>
        <Button> Add Villager </Button>
      </Link>
      <Carousel>
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
                  Created By: {data.created_by}
                </li>
                <li class="list-group-item" style={{ textAlign: "center" }}>
                  {/* <Button
                      onClick={flipHandler}
                      aria-pressed="false"
                      style={{ textAlign: "center" }}
                    >
                      See less
                    </Button> */}
                  {/* <button onClick={handleDelete}> Deletus Moi </button> */}
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
};

export default UserVillagerCard;
