import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNewVillagers } from "./newVillagersSlice";
import { fetchNewVillagers } from "../Villagers/newVillagersSlice";
import { useNavigate } from "react-router-dom";

export default function VillagerEdit({ currentVillager }) {
  const [newName, setNewName] = useState("");
  const [newSpecies, setNewSpecies] = useState("");
  const [newBirthday, setNewBirthday] = useState("");
  const [newPersonality, setNewPersonality] = useState("");
  const navigate = useNavigate();

  function handleSetNewName(e) {
    setNewName(e.target.value);
  }

  function handleSetNewSpecies(e) {
    setNewSpecies(e.target.value);
  }

  function handleSetNewBirthday(e) {
    setNewBirthday(e.target.value);
  }

  function handleSetNewPersonality(e) {
    setNewPersonality(e.target.value);
  }

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(currentVillager.id);

    dispatch(
      updateNewVillagers({
        id: currentVillager.id,
        name: newName,
        species: newSpecies,
        birthday: newBirthday,
        personality: newPersonality,
      })
    )
      .unwrap()
      .then((response) => {
        console.log(response);
        dispatch(fetchNewVillagers());
        navigate("/villagers");
      })
      .catch((e) => {
        console.log(e);
      });
    
    setNewName("");
    setNewSpecies("");
    setNewBirthday("");
    setNewPersonality("");
  }

  return (
    <>
      <img
        class="img-fluid"
        src={currentVillager.image}
        alt="new villager form"
      />

      <h1 style={{ textAlign: "center" }}>NewVillagerForm</h1>

      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput1"
            placeholder={currentVillager.name}
            value={newName}
            onChange={handleSetNewName}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput2">Birthday</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput2"
            placeholder={currentVillager.birthday}
            value={newBirthday}
            onChange={handleSetNewBirthday}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput3">Personality</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput3"
            placeholder={currentVillager.personality}
            value={newPersonality}
            onChange={handleSetNewPersonality}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput4">Species</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput4"
            placeholder={currentVillager.species}
            value={newSpecies}
            onChange={handleSetNewSpecies}
          />
        </div>
        <div type="submit" style={{ textAlign: "center" }}>
          <button className="form-input" style={{backgroundColor: "#c68483"}}>Save Edits</button>
        </div>
      </form>
    </>
  );
}
