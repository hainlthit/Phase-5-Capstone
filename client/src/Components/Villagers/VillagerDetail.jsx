import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteNewVillager } from "./newVillagersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import VillagerEdit from "../Villagers/VillagerEdit.jsx";

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

  // function handleDelete() {
  //   dispatch(deleteNewVillager(currentVillager.id))
  //     .unwrap()
  //     .then(() => {
  //       navigate("/villagers");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  // function handleDelete(){
  //     fetch(`/villagers/${id}`, {
  //       method: 'DELETE',
  //     })
  //     .then((r) => r.json())
  //     .then((data) => dispatch(newVillagerRemoved(data)))
  //   }

  function deleteVillager(id) {
    dispatch(deleteNewVillager(currentVillager.id));
    navigate("/villagers");
  }

  console.log(id);
  console.log(currentVillager.visitors)
 



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
          Visiting: 
        </li>
        <li class="list-group-item" style={{ textAlign: "center" }}>
          Created By: {currentVillager.created_by}
        </li>
        <li class="list-group-item" style={{ textAlign: "center" }}>
          <button onClick={deleteVillager} style={{ textAlign: "center" }}>
            DELETUS
          </button>
        </li>
        <li>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            EDITS
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    {currentVillager.name}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <VillagerEdit currentVillager={currentVillager} />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item" style={{ textAlign: "center" }}>
          <Link to={"/villagers"}>
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
