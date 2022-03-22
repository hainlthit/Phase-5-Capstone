import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Container, Alert } from "react-bootstrap";
import Home from "../Home/Home";
import VillagerContainer from "../Villagers/VillagerContainer.jsx";
import NewVillagerForm from "../Villagers/NewVillagerForm.jsx"
import { useDispatch, useSelector } from "react-redux";
import { fetchVillagers } from "../Villagers/villagersSlice";
import { fetchNewVillagers } from "../Villagers/newVillagersSlice";
import VillagerDetail from "../Villagers/VillagerDetail.jsx";
import IslandContainer from "../Islands/IslandContainer.jsx";
import { fetchIslands } from "../Islands/IslandsSlice";



function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  const navigate = useNavigate();
  // const [data, setData] = useState('')
  // const [userVillagers, setUserVillagers] = useState("");


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


  function handleLogOutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
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
        <Route exact path="/villagers" element={<VillagerContainer  />} />
        <Route exact path="/islands" element={<IslandContainer />} />
        <Route exact path="/add_villager" element={<NewVillagerForm  username={user.username} />} />
        <Route exact path="/villagers/:id" element={<VillagerDetail />} />
        {/* <Route exact path="/spells" element={<Spells />} /> */}
        {/* <Route exact path="/skills" element={<Skills />} /> */}
        {/* <Route exact path="/spells/:id" element={<SpellDetail />} /> */}
      </Routes>
    </div>
  );
}


export default App;