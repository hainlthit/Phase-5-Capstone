import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Container, Alert } from "react-bootstrap";
import Home from "../Home/Home";
import VillagerContainer from "../Villagers/VillagerContainer.jsx";
import NewVillagerForm from "../Villagers/NewVillagerForm.jsx"

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  const navigate = useNavigate();

  const [data, setData] = useState('')
  const [userVillagers, setUserVillagers] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/villagers')
      .then(r => r.json())
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    fetch("/villagers")
      .then((r) => r.json())
      .then((data) => setUserVillagers(data));
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
            Please Login OR Create an Account to enter
          </Alert>
        </Container>
        <Login onLogin={setUser} />
      </>
    );

  return (
    <div class="container">
      <NavBar user={user} handleLogOutClick={handleLogOutClick} />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/villagers" element={<VillagerContainer data={data} userVillagers={userVillagers} />} />
        <Route exact path="/add_villager" element={<NewVillagerForm />} />
        {/* <Route exact path="/spells" element={<Spells />} /> */}
        {/* <Route exact path="/skills" element={<Skills />} /> */}
        {/* <Route exact path="/spells/:id" element={<SpellDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      Navbar
    </a>
  </div>
</nav>;
