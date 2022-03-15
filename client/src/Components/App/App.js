import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Container, Alert } from "react-bootstrap";
import VillagerContainer from "../Villagers/VillagerContainer.jsx"

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });

    navigate("/");
  }

  if (!user)
    return (
      <>
        <Container>
          <Alert variant="primary">
            Please Login OR Signup To Create A New Account
          </Alert>
        </Container>
        <Login onLogin={setUser} />
      </>
    );

  return (
    <div>
      <NavBar user={user} handleLogOutClick={handleLogOutClick} />
      <Routes>
        <Route exact path="/villagers" element={<VillagerContainer />} />
        {/* <Route exact path="/classes" element={<Classes />} /> */}
        {/* <Route exact path="/spells" element={<Spells />} /> */}
        {/* <Route exact path="/skills" element={<Skills />} /> */}
        {/* <Route exact path="/spells/:id" element={<SpellDetail />} /> */}
      </Routes>
      <button onClick={handleLogOutClick}> LOGGOUT BUTTON </button>
      
    </div>
  );
}

export default App;
