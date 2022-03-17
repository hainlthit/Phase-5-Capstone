import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Container, Alert } from "react-bootstrap";
import Home from "../Home/Home";
import VillagerContainer from "../Villagers/VillagerContainer.jsx";
import NewVillagerForm from "../Villagers/NewVillagerForm.jsx"
import { useSelector, useDispatch } from "react-redux";
import { fetchVillagers } from "../Villagers/villagersSlice";


function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  const navigate = useNavigate();
  // const [data, setData] = useState('')
  const [userVillagers, setUserVillagers] = useState("");

  const villagerData = useSelector((state) => state.villagers.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVillagers());
  }, [dispatch]);

  console.log(villagerData)

  // useEffect(() => {
  //   fetch('https://acnhapi.com/v1a/villagers')
  //     .then(r => r.json())
  //     .then(data => setData(data))
  // }, [])

  useEffect(() => {
    fetch("/villagers")
      .then((r) => r.json())
      .then((data) => setUserVillagers(data));
  }, []);

  function handlePost(obj){
    fetch('/villagers',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
        setUserVillagers([...userVillagers, data])
      }
    )
  }

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
        <Route exact path="/villagers" element={<VillagerContainer villagerData={villagerData} userVillagers={userVillagers} />} />
        <Route exact path="/add_villager" element={<NewVillagerForm handlePost={handlePost}  username={user.username} />} />
        {/* <Route exact path="/spells" element={<Spells />} /> */}
        {/* <Route exact path="/skills" element={<Skills />} /> */}
        {/* <Route exact path="/spells/:id" element={<SpellDetail />} /> */}
      </Routes>
    </div>
  );
}


export default App;