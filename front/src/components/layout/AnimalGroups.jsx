import React, { useState } from "react";
import PageHeader from "./PageHeader";
import ListCard from "./ListCard";

const AnimalGroups = () => {
  const [groups, setGroups] = useState([
    {
      id: 1,
      title: "Vacas Lecheras",
      count: 45,
      items: ["Número Norte", "Último chequeo: 2024-08-15", "Producción: 1200L"],
    },
    {
      id: 2,
      title: "Centros",
      count: 120,
      items: ["Corral Este", "Último chequeo: 2024-08-20", "Producción: promedio"],
    },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Grupos de Animales"
        subtitle="Administra tus lotes y registros"
        buttonText="Nuevo Grupo"
        onButtonClick={() => console.log("Nuevo grupo")}
      />

      <div className="p-6 space-y-6">
        {groups.map((g) => (
          <ListCard
            key={g.id}
            title={g.title}
            subtitle={`${g.count} animales`}
            footer={
              <div className="flex gap-2">
                <button className="text-blue-600">Editar</button>
                <button className="text-gray-600">Detalles</button>
              </div>
            }
          >
            <ul className="space-y-1 text-sm text-gray-600">
              {g.items.map((i, idx) => (
                <li key={idx}>✔ {i}</li>
              ))}
            </ul>
          </ListCard>
        ))}
      </div>
    </div>
  );
};

export default AnimalGroups;
