import React, { useState } from "react";
import { DollarSign, TrendingUp, Users } from "lucide-react";

import PageHeader from "../layout/PageHeader";
import TabsNav from "../layout/TabsNav";
import InfoCard from "../cards/InfoCard";
import ListCard from "../cards/ListCard";
import StatusBadge from "../actions/StatusBadge";
import AddSalesModal from "./AddSalesModal";

const Sales = ({ sales = [], clients = [], onAddSale }) => {
  const [activeTab, setActiveTab] = useState("Ventas");
  const [isModalOpen, setModalOpen] = useState(false);

  // Calcular estadísticas
  const calculateStats = () => {
    const totalSales = sales.reduce((sum, sale) => sum + (sale.total || 0), 0);
    
    const currentMonth = sales
      .filter(sale => {
        const saleDate = new Date(sale.date);
        const now = new Date();
        return saleDate.getMonth() === now.getMonth() && 
               saleDate.getFullYear() === now.getFullYear();
      })
      .reduce((sum, sale) => sum + (sale.total || 0), 0);
    
    const activeClients = [...new Set(sales.map(sale => sale.client))].length;

    return { totalSales, currentMonth, activeClients };
  };

  const { totalSales, currentMonth, activeClients } = calculateStats();

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("es-EC", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("es-EC", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const getStatusColor = (status) => {
    switch (status) {
      case "Pagado":
        return "bg-green-100 text-green-800";
      case "Pendiente":
        return "bg-orange-100 text-orange-800";
      case "Enviado":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSave = (saleData) => {
    if (onAddSale) {
      onAddSale(saleData);
    }
    setModalOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Gestión de Ventas"
        subtitle="Administra tus ventas y clientes"
        buttonText="Nueva Venta"
        onButtonClick={() => setModalOpen(true)}
      />

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <InfoCard
            title="Ventas Totales"
            value={formatCurrency(totalSales)}
            description="Todas las ventas registradas"
            icon={<DollarSign className="text-blue-600" size={24} />}
          />
          <InfoCard
            title="Este Mes"
            value={formatCurrency(currentMonth)}
            description="Ventas del mes actual"
            icon={<TrendingUp className="text-green-600" size={24} />}
          />
          <InfoCard
            title="Clientes Activos"
            value={activeClients}
            description="Total de clientes"
            icon={<Users className="text-purple-600" size={24} />}
          />
        </div>

        <TabsNav
          tabs={["Ventas", "Clientes"]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <div className="mt-6 space-y-6">
          {activeTab === "Ventas" && sales.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No hay ventas registradas.</p>
              <button 
                onClick={() => setModalOpen(true)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Registrar primera venta
              </button>
            </div>
          ) : activeTab === "Ventas" && sales.map((sale) => (
            <ListCard
              key={sale._id}
              title={sale.product}
              subtitle={sale.client}
              badge={
                <StatusBadge text={sale.status} color={getStatusColor(sale.status)} />
              }
              footer={
                <div className="flex gap-2">
                  <button className="text-blue-600">Editar</button>
                  <button className="text-gray-600">Detalles</button>
                </div>
              }
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Cantidad:</span>{" "}
                  <span className="font-medium">{sale.quantity}</span>
                </div>
                <div>
                  <span className="text-gray-500">Precio:</span>{" "}
                  <span className="font-medium">{formatCurrency(sale.price)}</span>
                </div>
                <div>
                  <span className="text-gray-500">Total:</span>{" "}
                  <span className="font-semibold text-green-600">
                    {formatCurrency(sale.total)}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Pago:</span>{" "}
                  <span>{sale.paymentMethod}</span>
                </div>
              </div>
              <div className="text-gray-500 text-sm mt-3">
                Fecha: {formatDate(sale.date)}
              </div>
            </ListCard>
          ))}

          {activeTab === "Clientes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clients.length === 0 ? (
                <div className="col-span-2 text-center py-8">
                  <p className="text-gray-500">No hay clientes registrados.</p>
                </div>
              ) : clients.map((client) => (
                <ListCard
                  key={client._id}
                  title={client.name}
                  subtitle={client.type}
                  badge={
                    <StatusBadge
                      text="Activo"
                      color="bg-green-100 text-green-800"
                    />
                  }
                  footer={
                    <div className="flex gap-2">
                      <button className="text-blue-600">Ver</button>
                      <button className="text-gray-600">Editar</button>
                    </div>
                  }
                >
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Ventas:</span>{" "}
                      <span className="font-medium">{client.salesCount}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Total:</span>{" "}
                      <span className="font-semibold text-green-600">
                        {formatCurrency(client.totalSales)}
                      </span>
                    </div>
                  </div>
                </ListCard>
              ))}
            </div>
          )}
        </div>
      </div>

      <AddSalesModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default Sales;