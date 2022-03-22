import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createVisitor } from "./VisitorsSlice";

export default function VisitorsForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const islandData = useSelector((state) => [...state.islands.entities]);
  const villagerData = useSelector((state) => [...state.newVillagers]);

  const [island, setIsland] = useState("");
  const [villager, setVillager] = useState("");

  // useEffect(() => {
  //     fetch(`http://localhost:9292/venues`)
  //     .then(r => r.json())
  //     .then(data => setVenueData(data))
  // }, [])

  const islandOptions = islandData.map(({ id, name }) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));


  const villagerOptions = villagerData.map(({ id, name }) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));

  function handleIslandSelect(e) {
    setIsland(e.target.value);
  }

  function handleVillagerSelect(e) {
    setVillager(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newVisitorObj = {
      island_id: island,
      villager_id: villager,
    };
    dispatch(createVisitor(newVisitorObj))
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/islands");
    console.log(newVisitorObj);
  }

  return (
    <>
      <img
        class="img-fluid"
        src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/12/Animal-Crossing-Airkoryo.jpg"
        alt="add visitors form"
      />
      <h1 style={{ textAlign: "center" }}>Visitors Form</h1>

      <form onSubmit={handleSubmit}>
        <label className="input-label">
          Island:{" "}
        </label>
        <br />
        <select id="venue-data" onChange={handleIslandSelect}>
          {islandOptions}
        </select>
        <label className="input-label">
          Villager:{" "}
        </label>
        <br />
        <select id="venue-data" onChange={handleVillagerSelect}>
          {villagerOptions}
        </select>
        <div type="submit" style={{ textAlign: "center" }}>
          <button className="form-input">New Visitors</button>
        </div>
      </form>
    </>
  );
}
