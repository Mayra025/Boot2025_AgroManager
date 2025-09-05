import React, { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Users,
  Calendar,
  User,
  Eye,
  Edit,
} from "lucide-react";

import PageHeader from "./PageHeader";
import TabsNav from "./TabsNav";
import InfoCard from "./InfoCard";
import ListCard from "./ListCard";
import StatusBadge from "./StatusBadge";

const SalesManagement = () => {
  const [activeTab, setActiveTab] = useState("Ventas");

  const [salesData] = useState({
    totalSales: 4205,
    currentMonth: 0,
    activeClients: 4,
  });

  const [sales] = useState([
    {
      id: 1,
      product: "Leche",
      client: "Lácteos del Valle",
      quantity: "500 litros",
      price: "$0.85",
      total: "$425",
      date: "2024-08-20",
      paymentMethod: "Transferencia",
      status: "Pagado",
      statusColor: "bg-gray-800 text-white",
    },
    {
      id: 2,
      product: "Maíz",
      client: "Mercado Central",
      quantity: "2000 kg",
      price: "$1.2",
      total: "$2400",
      date: "2024-08-18",
      paymentMethod: "Efectivo",
      status: "Pendiente",
      statusColor: "bg-orange-500 text-white",
    },
  ]);

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

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Gestión de Ventas"
        subtitle="Administra tus ventas y clientes"
        buttonText="Nueva Venta"
        onButtonClick={() => console.log("Nueva venta")}
      />

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <InfoCard
            title="Ventas Totales"
            value={formatCurrency(salesData.totalSales)}
            description="Todas las ventas registradas"
            icon={<DollarSign className="text-blue-600" size={24} />}
          />
          <InfoCard
            title="Este Mes"
            value={formatCurrency(salesData.currentMonth)}
            description="Ventas del mes actual"
            icon={<TrendingUp className="text-green-600" size={24} />}
          />
          <InfoCard
            title="Clientes Activos"
            value={salesData.activeClients}
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
          {activeTab === "Ventas" &&
            sales.map((sale) => (
              <ListCard
                key={sale.id}
                title={sale.product}
                subtitle={sale.client}
                badge={
                  <StatusBadge text={sale.status} color={sale.statusColor} />
                }
                footer={
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                      <Eye size={14} /> Ver
                    </button>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-700">
                      <Edit size={14} /> Editar
                    </button>
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
                    <span className="font-medium">{sale.price}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Total:</span>{" "}
                    <span className="font-semibold text-green-600">
                      {sale.total}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Pago:</span>{" "}
                    <span>{sale.paymentMethod}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">
                  <Calendar size={14} /> {formatDate(sale.date)}
                </div>
              </ListCard>
            ))}

          {activeTab === "Clientes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Lácteos del Valle",
                  type: "Distribuidor",
                  sales: 3,
                  total: "$1,275",
                },
                {
                  name: "Mercado Central",
                  type: "Minorista",
                  sales: 8,
                  total: "$3,200",
                },
              ].map((client, idx) => (
                <ListCard
                  key={idx}
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
                      <span className="font-medium">{client.sales}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Total:</span>{" "}
                      <span className="font-semibold text-green-600">
                        {client.total}
                      </span>
                    </div>
                  </div>
                </ListCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesManagement;
