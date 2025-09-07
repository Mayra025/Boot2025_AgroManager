import React, { useState } from "react";
import PageHeader from "../layout/PageHeader";
import TabsNav from "../layout/TabsNav";
import ListCard from "../cards/ListCard";
import StatusBadge from "../actions/StatusBadge";
import AddInventoryModal from "./AddInventoryModal";

const Inventory = ({ items = [], onAddItem }) => {
    const [activeTab, setActiveTab] = useState("Productos");
    const [isModalOpen, setModalOpen] = useState(false);

    const getStatus = (item) => {
        if (item.quantity <= 0) {
            return { text: "Sin Stock", color: "bg-red-100 text-red-800" };
        } else if (item.quantity <= item.minStock) {
            return { text: "Stock Bajo", color: "bg-orange-100 text-orange-800" };
        } else {
            return { text: "Stock Normal", color: "bg-green-100 text-green-800" };
        }
    };

    const handleSave = (itemData) => {
        if (onAddItem) {
            onAddItem(itemData);
        }
        setModalOpen(false);
    };

    // Datos de ejemplo para movimientos (deberías implementar la lógica real)
    const movements = [
        {
            _id: 1,
            type: "Entrada",
            product: "Fertilizante NPK",
            quantity: 25,
            date: "2024-03-15",
            additionalInfo: "Compra a proveedor XYZ"
        },
        {
            _id: 2,
            type: "Salida",
            product: "Alimento Vacas",
            quantity: 10,
            date: "2024-03-14",
            additionalInfo: "Uso en sector norte"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader
                title="Control de Inventario"
                subtitle="Gestiona tus insumos y productos agrícolas"
                buttonText="Nuevo Producto"
                onButtonClick={() => setModalOpen(true)}
            />

            <TabsNav
                tabs={["Productos", "Movimientos"]}
                activeTab={activeTab}
                onChange={setActiveTab}
            />

            <div className="p-6 space-y-6">
                {activeTab === "Productos" && items.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No hay productos en el inventario.</p>
                        <button 
                            onClick={() => setModalOpen(true)}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Agregar primer producto
                        </button>
                    </div>
                ) : activeTab === "Productos" && items.map((item) => {
                    const { text, color } = getStatus(item);
                    return (
                        <ListCard
                            key={item._id}
                            title={item.name}
                            subtitle={`${item.category} - ${item.quantity} ${item.unit}`}
                            badge={<StatusBadge text={text} color={color} />}
                            footer={
                                <div className="flex gap-2">
                                    <button className="text-blue-600">Editar</button>
                                    <button className="text-gray-600">Detalles</button>
                                </div>
                            }
                        >
                            {item.additionalInfo && (
                                <div className="text-sm text-gray-600">
                                    <p>✔ {item.additionalInfo}</p>
                                </div>
                            )}
                            {item.location && (
                                <div className="text-sm text-gray-600">
                                    <p>📍 {item.location}</p>
                                </div>
                            )}
                        </ListCard>
                    );
                })}

                {activeTab === "Movimientos" &&
                    movements.map((m) => (
                        <ListCard
                            key={m._id}
                            title={`${m.type} - ${m.product}`}
                            subtitle={`Cantidad: ${m.quantity} - Fecha: ${m.date}`}
                            badge={
                                <StatusBadge 
                                    text={m.type} 
                                    color={m.type === "Entrada" 
                                        ? "bg-green-100 text-green-800" 
                                        : "bg-orange-100 text-orange-800"
                                    } 
                                />
                            }
                            footer={
                                <div className="flex gap-2">
                                    <button className="text-blue-600">Ver</button>
                                    <button className="text-gray-600">Detalles</button>
                                </div>
                            }
                        >
                            {m.additionalInfo && (
                                <div className="text-sm text-gray-600">
                                    <p>✔ {m.additionalInfo}</p>
                                </div>
                            )}
                        </ListCard>
                    ))}
            </div>

            <AddInventoryModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
};

export default Inventory;