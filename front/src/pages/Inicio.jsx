import { Leaf, Users, Package, DollarSign } from "lucide-react";
import PageHeader from "../components/layout/PageHeader";
import InfoCard from "../components/layout/InfoCard";
import ListCard from "../components/layout/ListCard";
import StatusBadge from "../components/layout/StatusBadge";
import ProgressBar from "../components/ui/ProgressBar";
import useInicioStore from "../features/inicio/store/inicioStore";
import { useEffect } from "react";

export default function Inicio() {
  const { crops, animals, stock, sales, activities, alerts, progress, loadDashboard } =
    useInicioStore();

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <PageHeader
          title="Dashboard"
          subtitle="Resumen de tu actividad agropecuaria"
        />

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <InfoCard
            title="Total Cultivos"
            value={crops.value}
            description={crops.change}
            icon={<Leaf className="w-5 h-5 text-green-600" />}
          />
          <InfoCard
            title="Animales"
            value={animals.value}
            description={animals.change}
            icon={<Users className="w-5 h-5 text-indigo-600" />}
          />
          <InfoCard
            title="Productos en Stock"
            value={stock.value}
            description={stock.change}
            icon={<Package className="w-5 h-5 text-orange-600" />}
          />
          <InfoCard
            title="Ventas del Mes"
            value={`$${sales.value}`}
            description={sales.change}
            icon={<DollarSign className="w-5 h-5 text-emerald-600" />}
          />
        </div>

        {/* Actividades & Alertas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ListCard title="Actividades Recientes">
            <ul className="space-y-4">
              {activities.map((act, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">{act.title}</p>
                    <p className="text-sm text-gray-500">{act.subtitle}</p>
                  </div>
                  <StatusBadge text={act.status} color={act.color} />
                </li>
              ))}
            </ul>
          </ListCard>

          <ListCard title="Alertas y Recordatorios">
            <ul className="space-y-3">
              {alerts.map((alert, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${alert.dotColor}`}
                  ></span>
                  <div>
                    <p className="text-gray-700">{alert.title}</p>
                    <p className="text-xs text-gray-500">{alert.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ListCard>
        </div>

        {/* Progreso Producción */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Progreso de Producción
          </h3>
          <div className="space-y-4">
            {progress.map((item, idx) => (
              <ProgressBar
                key={idx}
                label={item.label}
                value={item.value}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
