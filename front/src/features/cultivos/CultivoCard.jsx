import { MapPin, Calendar, Droplet } from "lucide-react";
import StatusBadge from "../../components/actions/StatusBadge";

const CultivoCard = ({ cultivo, onEdit, onView }) => {
    return (
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{cultivo.nombre}</h3>
                    <p className="text-gray-500 text-sm">{cultivo.variedad}</p>
                </div>
                <StatusBadge text={cultivo.estado.text} color={cultivo.estado.color} />
            </div>

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    <span>{cultivo.parcela} • {cultivo.hectareas} hectáreas</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-gray-400" />
                    <span>Siembra: {cultivo.siembra}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Droplet size={16} className="text-gray-400" />
                    <span>Cosecha: {cultivo.cosecha}</span>
                </div>
            </div>

            {/* Footer */}
            <p className="text-gray-500 text-sm mt-4">{cultivo.nota}</p>

            <div className="flex justify-between mt-6">
                <button
                    onClick={onEdit}
                    className="px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                >
                    Editar
                </button>
                <button
                    onClick={onView}
                    className="px-4 py-2 border rounded-lg text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                    Ver Detalle
                </button>
            </div>
        </div>
    );
};

export default CultivoCard;
