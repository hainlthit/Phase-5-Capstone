import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createIsland, fetchIslands } from "./IslandsSlice";
import { fetchUsers } from "../Users/UsersSlice";

export default function IslandForm() {
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const users = useSelector((state) => state.users.entities);

  function handleSetNewName(e) {
    setNewName(e.target.value);
  }

  function handleSetNewImage(e) {
    setNewImage(e.target.value);
  }
  function handleSetNewDescription(e) {
    setNewDescription(e.target.value);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newIslandObj = {
      name: newName,
      user_id: users.id,
      image: newImage,
      description: newDescription,
    };
    dispatch(createIsland(newIslandObj))
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    
    dispatch(fetchUsers());
    navigate("/islands");
    console.log(newIslandObj);
    dispatch(fetchIslands());
  }

  return (
    <>
      <img
        class="img-fluid"
        src="https://pbs.twimg.com/media/ES6xdEpWsAEAzhU.jpg"
        alt="new island form"
      />
      <h1 style={{ textAlign: "center" }}>Island Form</h1>

      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput1"
            placeholder="Your new Island's Name"
            value={newName}
            onChange={handleSetNewName}
          />
          <label for="exampleFormControlInput1">Image</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput1"
            placeholder="Whats it Look Like?"
            value={newImage}
            onChange={handleSetNewImage}
          />
          <label for="exampleFormControlInput1">Description</label>
          <input
            class="form-control"
            type="string"
            id="exampleFormControlInput1"
            placeholder="Describe Your Island"
            value={newDescription}
            onChange={handleSetNewDescription}
          />
        </div>

        <div type="submit" style={{ textAlign: "center" }}>
          <button className="form-input">New Island</button>
        </div>
      </form>
    </>
  );
}
