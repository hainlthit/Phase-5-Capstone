import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteIsland, fetchIslands } from "./IslandsSlice";
import { fetchVisitors } from "../Visitors/VisitorsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function IslandDetail() {
  const [currentIsland, setCurrentIsland] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const users = useSelector((state) => state.users.entities);

  useEffect(() => {
    fetch(`/islands/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setCurrentIsland(data);
      });
  }, [id]);

  function deleteIslands() {
    dispatch(deleteIsland(currentIsland.id));
    dispatch(fetchIslands());
    dispatch(fetchVisitors());
    navigate("/islands");
  }

  console.log(id);
  console.log(users.islands[0].name);

  return (
    <>
      <h1 className="reviews-h1" style={{ textAlign: "center" }}>
        ISLAND DETAILS
      </h1>
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

          {users.islands[0].name === currentIsland.name ? (
            <li class="list-group-item" style={{ textAlign: "center" }}>
              <button
                onClick={deleteIslands}
                style={{ textAlign: "center", backgroundColor: "#c68483" }}
              >
                Start from scratch
              </button>
            </li>
          ) : (
            ""
          )}

          <li class="list-group-item" style={{ textAlign: "center" }}>
            <Link to={"/islands"}>
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
    </>
  );
}

export default IslandDetail;
