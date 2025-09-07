import React, { useEffect, useState } from "react";
import Sales from "../components/sales/Sales";
import { getSales, createSale } from "../services/salesService";

const Ventas = () => {
  const [sales, setSales] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const salesData = await getSales();
      setSales(salesData);
      
      // Extraer información de clientes de las ventas
      const clientMap = new Map();
      
      salesData.forEach(sale => {
        if (!clientMap.has(sale.client)) {
          clientMap.set(sale.client, {
            name: sale.client,
            salesCount: 0,
            totalSales: 0
          });
        }
        
        const client = clientMap.get(sale.client);
        client.salesCount += 1;
        client.totalSales += sale.total || 0;
      });
      
      setClients(Array.from(clientMap.values()));
    } catch (error) {
      console.error("Error loading sales data:", error);
    }
  };

  const handleSave = async (saleData) => {
    try {
      await createSale(saleData);
      loadData(); // Recargar los datos después de guardar
    } catch (error) {
      console.error("Error saving sale:", error);
    }
  };

  return (
    <Sales
      sales={sales}
      clients={clients}
      onAddSale={handleSave}
    />
  );
};

export default Ventas;