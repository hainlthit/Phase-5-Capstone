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
  const [edits, setEdits] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const users = useSelector((state) => state.users.entities);

  function editPage() {
    setEdits(false);
  }

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

  function deleteVillager() {
    dispatch(deleteNewVillager(currentVillager.id));
    navigate("/villagers");
  }

  console.log(id);
  console.log(currentVillager.visitors);

  return (
    <>
      {edits ? (
        <div class="card">
          <img
            class="card-img-top"
            src={currentVillager.image}
            alt="Character"
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

            {users.username === currentVillager.created_by ? (
              <li class="list-group-item" style={{ textAlign: "center" }}>
                {" "}
                <button
                  onClick={deleteVillager}
                  style={{ textAlign: "center" }}
                >
                  DELETUS
                </button>
                <button onClick={editPage} style={{ textAlign: "center" }}>
                  EDITS
                </button>
              </li>
            ) : (
              ""
            )}

            <li class="list-group-item" style={{ textAlign: "center" }}>
              <Link to={"/villagers"}>
                <button aria-pressed="false" style={{ textAlign: "center" }}>
                  Back
                </button>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <VillagerEdit currentVillager={currentVillager} />
      )}
    </>
  );
}

export default VillagerDetail;
