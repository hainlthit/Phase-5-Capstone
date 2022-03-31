import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchIslands } from "../Islands/IslandsSlice";
import { fetchVisitors, deleteVisitor } from "./VisitorsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function VisitorsDetail() {

    const [currentVisitor, setCurrentVisitor] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const { id } = useParams();
  
    const users = useSelector((state) => state.users.entities);
  
    useEffect(() => {
      fetch(`/visitors/${id}`)
        .then((r) => r.json())
        .then((data) => {
          setCurrentVisitor(data);
        });
    }, [id]);
  
    function deleteHandler() {
      dispatch(deleteVisitor(currentVisitor.id));
      dispatch(fetchIslands());
      dispatch(fetchVisitors());
      navigate("/visitors");
    }  

    console.log(currentVisitor.villager?.name)
    console.log(currentVisitor.island?.name)

  return (
    <>
    <h1 className="reviews-h1" style={{ textAlign: "center"  }}>
      VISITOR DETAILS
    </h1>
    <div class="card" style={{ fontFamily: "FinkHeavy" }}>
      <img
        class="card-img-top"
        src={currentVisitor.villager?.image}
        alt="Character"
      ></img>
       <ul class="list-group list-group-flush">
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
        {currentVisitor.villager?.name}
        </h5>
      </div>
        {users.islands[0].name === currentVisitor.island?.name ? (
          <li class="list-group-item" style={{ textAlign: "center" }}>
            <button
              onClick={deleteHandler}
              style={{ textAlign: "center", backgroundColor: "#c68483" }}
            >
              Farewell for Now!
            </button>
          </li>
        ) : (
          ""
        )}

        <li class="list-group-item" style={{ textAlign: "center" }}>
          <Link to={"/visitors"}>
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
  )
}
