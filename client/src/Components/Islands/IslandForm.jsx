import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createIsland } from "./IslandsSlice";

export default function IslandForm({ user }) {
  const [newName, setNewName] = useState("");

  function handleSetNewName(e) {
    setNewName(e.target.value);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newIslandObj = {
      name: newName,
      user_id: user.id,
    };
    dispatch(createIsland(newIslandObj))
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/islands");
    console.log(newIslandObj)
  }



  return (
    <>
      <img
        class="img-fluid"
        src="https://pbs.twimg.com/media/ES6xdEpWsAEAzhU.jpg"
        alt="new island image form"
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
        </div>

        <div type="submit" style={{ textAlign: "center" }}>
          <button className="form-input">New Island</button>
        </div>
      </form>
    </>
  );
}
