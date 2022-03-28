import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteIsland } from "./IslandsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function IslandDetail() {
  const [currentIsland, setCurrentIsland] = useState("");
  const [edits, setEdits] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const users = useSelector((state) => state.users.entities);

  function editPage() {
    setEdits(false);
  }

  useEffect(() => {
    fetch(`/islands/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setCurrentIsland(data);
      });
  }, [id]);

  function deleteIslands() {
    dispatch(deleteIsland(currentIsland.id));
    navigate("/islands");
  }

  console.log(id);

  return (
    <>
      ISLAND DETAILS
      <div class="card">
        <img
          class="card-img-top"
          src={currentIsland.image}
          alt="Character"
        ></img>
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
            {currentIsland.name}
          </h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item" style={{ textAlign: "center" }}>
                  Description: {currentIsland.description}
                </li>
          <li class="list-group-item" style={{ textAlign: "center" }}>
            {" "}
            <button onClick={deleteIslands} style={{ textAlign: "center" }}>
              DELETUR
            </button>
            <button onClick={editPage} style={{ textAlign: "center" }}>
              EDITS
            </button>
          </li>
          <li class="list-group-item" style={{ textAlign: "center" }}>
            <Link to={"/islands"}>
              <button aria-pressed="false" style={{ textAlign: "center" }}>
                Back
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default IslandDetail;
