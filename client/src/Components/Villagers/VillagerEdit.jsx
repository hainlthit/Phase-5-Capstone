import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewVillagers } from "./newVillagersSlice";
import { useNavigate } from "react-router-dom";

export default function VillagerEdit({ username, currentVillager }) {
  const [newName, setNewName] = useState("");
  const [newSpecies, setNewSpecies] = useState("");
  const [newBirthday, setNewBirthday] = useState("");
  const [newPersonality, setNewPersonality] = useState("");
  const [newImage, setNewImage] = useState("");
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

  function handleSetNewImage(e) {
    setNewImage(e.target.value);
  }

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const newVillagerObj = {
      name: newName,
      species: newSpecies,
      birthday: newBirthday,
      personality: newPersonality,
      image: newImage,
      likes: 0,
      created_by: username,
    };
    dispatch(addNewVillagers(newVillagerObj))
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    setNewName("");
    setNewSpecies("");
    setNewBirthday("");
    setNewPersonality("");
    setNewImage("");
    navigate("/villagers");
  }

  return (
    <>
      <img
        class="img-fluid"
        src={currentVillager.image}
        alt="new villager form image"
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
          <button className="form-input">New Villager</button>
        </div>
      </form>
    </>
  );
}
