import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addNewVillagers } from "./newVillagersSlice";

export default function AddVillager() {
  const [villager, setVillager] = useState("");
  const [newName, setNewName] = useState("");
  const [newSpecies, setNewSpecies] = useState("");
  const [newBirthday, setNewBirthday] = useState("");
  const [newPersonality, setNewPersonality] = useState("");
  const [newImage, setNewImage] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const users = useSelector((state) => state.users.entities);

  useEffect(() => {
    fetch(`https://acnhapi.com/v1a/villagers/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setVillager(data);
      });
  }, [id]);

  const dispatch = useDispatch();

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
    setNewImage(e.target.placeholder);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newVillagerObj = {
      name: newName,
      species: newSpecies,
      birthday: newBirthday,
      personality: newPersonality,
      image: newImage,
      likes: 0,
      created_by: users.username,
    };
    dispatch(addNewVillagers(newVillagerObj))
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/villagers");
  }

  console.log(villager);
  return (
    <>
      <img
        class="img-fluid"
        src="https://animalcrossingworld.com/wp-content/uploads/2020/11/Switch_ACNH_2020-DecUpdate_SCRN_12.png"
        alt="new villager form"
      />
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput1"
            placeholder="Give them a unique name"
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
            placeholder={villager["birthday-string"]}
            value={villager["birthday-string"]}
            onChange={handleSetNewBirthday}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput3">Personality</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput3"
            placeholder={villager.personality}
            value={villager.personality}
            onChange={handleSetNewPersonality}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput4">Species</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput4"
            placeholder={villager.species}
            value={villager.species}
            onChange={handleSetNewSpecies}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput5">Image Link</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput5"
            placeholder={villager.image_uri}
            value={villager.image_uri}
            onChange={handleSetNewImage}
          />
        </div>

        <div type="submit" style={{ textAlign: "center" }}>
          <button className="form-input">New Villager</button>
        </div>
      </form>
    </>
  );
}
