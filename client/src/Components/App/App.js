// React Components
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";

// Redux
import { useDispatch } from "react-redux";
import { fetchVillagers } from "../Villagers/villagersSlice";
import { fetchNewVillagers } from "../Villagers/newVillagersSlice";
import { fetchIslands } from "../Islands/IslandsSlice";
import { fetchVisitors } from "../Visitors/VisitorsSlice";
import { logout } from "../Users/UsersSlice";

// Components
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Login from "../Login/Login";
import VillagerContainer from "../Villagers/VillagerContainer.jsx";
import VillagerDetail from "../Villagers/VillagerDetail.jsx";
import NewVillagerForm from "../Villagers/NewVillagerForm.jsx";
import IslandContainer from "../Islands/IslandContainer.jsx";
import IslandDetail from "../Islands/IslandDetail.jsx";
import IslandForm from "../Islands/IslandForm.jsx";
import VisitorsForm from "../Visitors/VisitorsForm.jsx";
import VisitorsContainer from "../Visitors/VisitorsContainer.jsx";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIslands());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchVillagers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNewVillagers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchVisitors());
  }, [dispatch]);

  function handleLogOutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        dispatch(logout());
      }
    });

    navigate("/home");
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
        <Route exact path="/villagers" element={<VillagerContainer />} />
        <Route exact path="/islands" element={<IslandContainer />} />
        <Route exact path="/visitors" element={<VisitorsContainer />} />
        <Route exact path="/add_villager" element={<NewVillagerForm />} />
        <Route exact path="/add_island" element={<IslandForm />} />
        <Route exact path="/add_visitors" element={<VisitorsForm />} />
        <Route exact path="/villagers/:id" element={<VillagerDetail />} />
        <Route exact path="/islands/:id" element={<IslandDetail />} />
        {/* <Route exact path="/spells" element={<Spells />} /> */}
        {/* <Route exact path="/skills" element={<Skills />} /> */}
        {/* <Route exact path="/spells/:id" element={<SpellDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
