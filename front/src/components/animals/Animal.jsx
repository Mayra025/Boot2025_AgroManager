// import React, { useState } from "react";
// import PageHeader from "../layout/PageHeader";
// import ListCard from "../cards/ListCard";

// const AnimalGroups = () => {
//   const [groups, setGroups] = useState([
//     {
//       id: 1,
//       title: "Vacas Lecheras",
//       count: 45,
//       items: ["Número Norte", "Último chequeo: 2024-08-15", "Producción: 1200L"],
//     },
//     {
//       id: 2,
//       title: "Centros",
//       count: 120,
//       items: ["Corral Este", "Último chequeo: 2024-08-20", "Producción: promedio"],
//     },
//   ]);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <PageHeader
//         title="Grupos de Animales"
//         subtitle="Administra tus lotes y registros"
//         buttonText="Nuevo Grupo"
//         onButtonClick={() => console.log("Nuevo grupo")}
//       />

//       <div className="p-6 space-y-6">
//         {groups.map((g) => (
//           <ListCard
//             key={g.id}
//             title={g.title}
//             subtitle={`${g.count} animales`}
//             footer={
//               <div className="flex gap-2">
//                 <button className="text-blue-600">Editar</button>
//                 <button className="text-gray-600">Detalles</button>
//               </div>
//             }
//           >
//             <ul className="space-y-1 text-sm text-gray-600">
//               {g.items.map((i, idx) => (
//                 <li key={idx}>✔ {i}</li>
//               ))}
//             </ul>
//           </ListCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnimalGroups;

import React, { useState } from "react";
import PageHeader from "../layout/PageHeader";
import ListCard from "../cards/ListCard";
import AddAnimalGroupModal from "./AddAnimalModal";

const AnimalGroups = ({ groups, onAddGroup }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleSave = (groupData) => {
        onAddGroup(groupData);
        setModalOpen(false);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader
                title="Grupos de Animales"
                subtitle="Administra tus lotes y registros"
                buttonText="Nuevo Grupo"
                onButtonClick={() => setModalOpen(true)}
            />

            <div className="p-6 space-y-6">
                {groups.map((g) => (
                    <ListCard
                        key={g._id}
                        title={g.title}
                        subtitle={`${g.count} animales`}
                        footer={
                            <div className="flex gap-2">
                                <button className="text-blue-600">Editar</button>
                                <button className="text-gray-600">Detalles</button>
                            </div>
                        }
                    >
                        {g.additionalInfo && (
                            <div className="text-sm text-gray-600">
                                <p>✔ {g.additionalInfo}</p>
                            </div>
                        )}
                    </ListCard>
                ))}
            </div>

            <AddAnimalGroupModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
};

export default AnimalGroups;