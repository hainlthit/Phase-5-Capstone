import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteVillager, newVillagerRemoved } from "./newVillagersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import newVillagerDataService from "../../services/newVillagerServices";

function VillagerDetail() {
  const [currentVillager, setCurrentVillager] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetch(`/villagers/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setCurrentVillager(data);
      });
  }, [id]);

  console.log(currentVillager);

  
//   function handleDelete() {
//     dispatch(deleteVillager(id))
//       .unwrap()
//       .then(() => {
//         navigate("/villagers");
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

function handleDelete(){
    fetch(`/villagers/${id}`, { 
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then((data) => dispatch(newVillagerRemoved(data)))
  }

  console.log(id)

  return (
    <div class="card">
      <img
        class="card-img-top"
        src={currentVillager.image}
        alt="Character Image"
      ></img>
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
          {currentVillager.name}
        </h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" style={{ textAlign: "center" }}>
          Birthday: {currentVillager.birthday}
        </li>
        <li class="list-group-item" style={{ textAlign: "center" }}>
          Species: {currentVillager.species}
        </li>
        <li class="list-group-item" style={{ textAlign: "center" }}>
          Personality: {currentVillager.personality}
        </li>
        <li class="list-group-item" style={{ textAlign: "center" }}>
          Likes: {currentVillager.likes}
        </li>
        <li class="list-group-item" style={{ textAlign: "center" }}>
          Created By: {currentVillager.created_by}
        </li>
        <li class="list-group-item" style={{ textAlign: "center" }}>
          <button  onClick={handleDelete} style={{ textAlign: "center" }}>
            DELETUS
          </button>
        </li>
        <li class="list-group-item" style={{ textAlign: "center" }}>
          <Link to={`/villagers`}>
            <button aria-pressed="false" style={{ textAlign: "center" }}>
              Back
            </button>
          </Link>
        </li>
        <li class="list-group-item" style={{ textAlign: "center" }}></li>
      </ul>
    </div>
  );
}

export default VillagerDetail;
