import { X } from "lucide-react";
import StatusBadge from "../../components/actions/StatusBadge";
import { useActividadStore } from "./store/actividadStore";

const CultivoDetailModal = ({ isOpen, onClose, cultivo }) => {
  if (!isOpen || !cultivo) return null;

  const { actividades } = useActividadStore()

  const actividadesCultivo = actividades.filter(
    (a) => a.cultivoId === cultivo.id
  )

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{cultivo.nombre}</h2>
            <p className="text-gray-500">{cultivo.variedad}</p>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge text={cultivo.estado.text} color={cultivo.estado.color} />
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Info General */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-gray-700 mb-2">Información General</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>📍 Parcela: {cultivo.parcela}</li>
              <li>🌱 Hectáreas: {cultivo.hectareas}</li>
              <li>📅 Siembra: {cultivo.siembra}</li>
              <li>🌾 Cosecha: {cultivo.cosecha}</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-gray-700 mb-2">Notas</h3>
            <p className="text-gray-600 text-sm">{cultivo.nota}</p>
          </div>
        </div>

        {/* Actividades */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Actividades</h3>
          <div className="space-y-3">
            {actividadesCultivo.length > 0 ? (
              actividadesCultivo.map((act) => (
                <div
                  key={act.id}
                  className="border rounded-lg p-3 bg-white shadow-sm flex flex-col"
                >
                  <span className="text-sm text-gray-500">{act.fecha}</span>
                  <span className="font-medium text-gray-800">{act.tipo}</span>
                  <span className="text-sm text-gray-600">{act.detalle}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No hay actividades registradas.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultivoDetailModal;
