import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteNewVillager, fetchNewVillagers } from "./newVillagersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import VillagerEdit from "../Villagers/VillagerEdit.jsx";

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

  function deleteVillager() {
    dispatch(deleteNewVillager(currentVillager.id));
    dispatch(fetchNewVillagers());
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
                <div class="row">
                  <div class="col">
                    <button
                      onClick={editPage}
                      style={{
                        textAlign: "center",
                        backgroundColor: "#c68483",
                      }}
                    >
                      Not Quite Perfect
                    </button>
                  </div>
                  <div class="col">
                    <button
                      onClick={deleteVillager}
                      style={{
                        textAlign: "center",
                        backgroundColor: "#c68483",
                      }}
                    >
                      Say Good-Bye For Now!
                    </button>
                  </div>
                </div>
              </li>
            ) : (
              ""
            )}

            <li class="list-group-item" style={{ textAlign: "center" }}>
              <Link to={"/villagers"}>
                <button
                  aria-pressed="false"
                  style={{ textAlign: "center", backgroundColor: "#c68483" }}
                >
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
