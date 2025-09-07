import React, { useEffect, useState } from "react";
import AnimalGroups from "../components/animals/Animal";
import { getAnimals, createAnimalGroup } from "../services/animalService";

const Animales = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getAnimals();
    setGroups(data);
  };

  const handleSave = async (groupData) => {
    await createAnimalGroup(groupData);
    loadData();
  };

  return (
    <AnimalGroups 
      groups={groups}
      onAddGroup={handleSave}
    />
  );
};

export default Animales;