import { useActividadStore } from "./store/actividadStore"
import ActividadModal from "./ActividadModal"
import { useState, useEffect } from "react"

export default function ActividadesList() {
  const { actividades, loadActividades, loading } = useActividadStore()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedActividad, setSelectedActividad] = useState(null)

  useEffect(() => {
    loadActividades()
  }, [loadActividades])

  if (loading) return <p className="p-4">Cargando actividades...</p>

  return (
    <div className="p-4 rounded-xl border space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Actividades Programadas</h2>
        <button
          onClick={() => {
            setSelectedActividad(null)
            setModalOpen(true)
          }}
          className="bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-800"
        >
          + Nueva Actividad
        </button>
      </div>

      {actividades.map((act) => (
        <div
    key={act._id || act.id}
          className="p-4 border rounded-xl flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{act.titulo}</h3>
            <p className="text-sm text-gray-600">
              {act.cultivo} - {act.parcela} • {act.fecha}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-1 rounded text-xs ${act.estado === "Completado"
                ? "bg-black text-white"
                : act.estado === "Pendiente"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700"
                }`}
            >
              {act.estado}
            </span>
            <button
              onClick={() => {
                setSelectedActividad(act)
                setModalOpen(true)
              }}
              className="border px-3 py-1 rounded-lg text-sm hover:bg-gray-100">
              Gestionar
            </button>
          </div>
        </div>
      ))}
      <ActividadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actividad={selectedActividad}
      />

    </div>
  )
}
