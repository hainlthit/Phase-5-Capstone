import React, { useState, useEffect } from "react";
import VillagerList from "./VillagerList"

export default function VillagerContainer() {

  const [data, setData] = useState('')

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/villagers')
      .then(r => r.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <div>All Villagers</div>
      <VillagerList data={data}/>
    </>
  );
}
