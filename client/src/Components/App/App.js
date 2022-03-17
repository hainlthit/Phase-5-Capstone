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


function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  const navigate = useNavigate();
  // const [data, setData] = useState('')
  // const [userVillagers, setUserVillagers] = useState("");


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVillagers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNewVillagers());
  }, []);

  const villagerData = useSelector((state) => state.newVillagers.entities);
  console.log(villagerData)



  // function handlePost(obj){
  //   fetch('/villagers',{
  //     method:'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body:JSON.stringify(obj)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //       setUserVillagers([...userVillagers, data])
  //     }
  //   )
  // }

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
        <Route exact path="/add_villager" element={<NewVillagerForm  username={user.username} />} />
        {/* <Route exact path="/spells" element={<Spells />} /> */}
        {/* <Route exact path="/skills" element={<Skills />} /> */}
        {/* <Route exact path="/spells/:id" element={<SpellDetail />} /> */}
      </Routes>
    </div>
  );
}


export default App;