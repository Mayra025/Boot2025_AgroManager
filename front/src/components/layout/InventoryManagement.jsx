import React, { useState } from "react";
import PageHeader from "./PageHeader";
import TabsNav from "./TabsNav";
import ListCard from "./ListCard";
import StatusBadge from "./StatusBadge";

const InventoryManagement = () => {
  const [activeTab, setActiveTab] = useState("Productos");

  const products = [
    { id: 1, name: "Fertilizante NPK", category: "Insumos", status: "normal" },
    { id: 2, name: "Alimento Vacas", category: "Alimentos", status: "low" },
  ];

  const getStatus = (status) =>
    status === "low"
      ? { text: "Stock Bajo", color: "bg-red-100 text-red-800" }
      : { text: "Stock Normal", color: "bg-green-100 text-green-800" };

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Control de Inventario"
        subtitle="Gestiona tus insumos y productos agrícolas"
        buttonText="Nuevo Producto"
        onButtonClick={() => console.log("Nuevo producto")}
      />

      <TabsNav
        tabs={["Productos", "Movimientos"]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <div className="p-6 space-y-6">
        {activeTab === "Productos" &&
          products.map((p) => {
            const { text, color } = getStatus(p.status);
            return (
              <ListCard
                key={p.id}
                title={p.name}
                subtitle={p.category}
                badge={<StatusBadge text={text} color={color} />}
                footer={
                  <div className="flex gap-2">
                    <button className="text-blue-600">Editar</button>
                    <button className="text-gray-600">Detalles</button>
                  </div>
                }
              >
                <p className="text-sm text-gray-600">Más info del producto...</p>
              </ListCard>
            );
          })}
      </div>
    </div>
  );
};

export default InventoryManagement;
