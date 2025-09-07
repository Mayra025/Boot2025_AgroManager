import React, { useEffect, useState } from "react";
import Inventory from "../components/inventory/Inventory";
import { getInventory, createInventory } from "../services/inventoryService";

const Inventario = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const data = await getInventory();
            setItems(data);
        } catch (error) {
            console.error("Error loading inventory:", error);
        }
    };

    const handleSave = async (itemData) => {
        try {
            await createInventory(itemData);
            loadData(); // Recargar los datos después de guardar
        } catch (error) {
            console.error("Error saving inventory item:", error);
        }
    };

    return (
        <Inventory
            items={items}
            onAddItem={handleSave}
        />
    );
};

export default Inventario;