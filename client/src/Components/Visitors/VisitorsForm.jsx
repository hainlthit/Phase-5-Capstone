import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { createVisitor } from "./VisitorsSlice";
import { fetchIslands } from "../Islands/IslandsSlice";

export default function VisitorsForm() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const islandData = useSelector((state) => state.users.entities.islands);
  const villagerData = useSelector((state) => [...state.newVillagers]);

  const [villager, setVillager] = useState("");
  const [errors, setErrors] = useState([]);

  const villagerOptions = villagerData.map(({ id, name }) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));

  function handleVillagerSelect(e) {
    setVillager(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createVisitor({
        villager_id: villager,
        island_id: islandData[0].id,
      })
    )
      .unwrap()
      .then((data) => {
        console.log(data);
        dispatch(fetchIslands());
      })
      .catch((data) => {
        setErrors(data);
      });
  }

  console.log(errors);

  return (
    <>
      <img
        class="img-fluid"
        src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/12/Animal-Crossing-Airkoryo.jpg"
        alt="add visitors form"
      />
      <h1 style={{ textAlign: "center" }}>Visitors Form</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#6dc2a0",
          borderRadius: "5px",
          fontFamily: "FinkHeavy",
        }}
      >
        <h2> Add a villager to {islandData[0].name} </h2>
        <label className="input-label">Villager: </label>
        <br />
        <select onChange={handleVillagerSelect}>{villagerOptions}</select>
        <div type="submit" style={{ textAlign: "center" }}>
          <button
            className="form-input"
            style={{ textAlign: "center", backgroundColor: "#c68483" }}
          >
            New Visitors
          </button>
        </div>
      </form>
    </>
  );
}
