import { useState, useEffect } from "react"
import { useActividadStore } from "./store/actividadStore"

export default function ActividadModal({ isOpen, onClose, actividad }) {
  const { addActividad, updateActividad, removeActividad } = useActividadStore()

  const [formData, setFormData] = useState({
    titulo: "",
    estado: "Programado",
    cultivo: "",
    parcela: "",
    fecha: "",
  })

  // Si estamos editando, precargar datos
  // useEffect(() => {
  //   if (actividad) {
  //     setFormData(actividad)
  //   } else {
  //     setFormData({
  //       titulo: "",
  //       estado: "Programado",
  //       cultivo: "",
  //       parcela: "",
  //       fecha: new Date().toISOString().split("T")[0],
  //     })
  //   }
  // }, [actividad])

  useEffect(() => {
    if (actividad) {
      setFormData({
        ...actividad,
        fecha: actividad.fecha
          ? new Date(actividad.fecha).toISOString().split("T")[0]
          : "",
      })
    } else {
      setFormData({
        titulo: "",
        estado: "Programado",
        cultivo: "",
        parcela: "",
        fecha: new Date().toISOString().split("T")[0], // hoy
      })
    }
  }, [actividad])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (actividad) {
      updateActividad(actividad.id, formData)
    } else {
      addActividad(formData)
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          {actividad ? "Editar Actividad" : "Nueva Actividad"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Título"
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="cultivo"
            value={formData.cultivo}
            onChange={handleChange}
            placeholder="Cultivo"
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="parcela"
            value={formData.parcela}
            onChange={handleChange}
            placeholder="Parcela"
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <select
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="Programado">Programado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Completado">Completado</option>
          </select>

          <div className="flex justify-between items-center mt-4">
            {actividad && (
              <button
                type="button"
                onClick={() => {
                  removeActividad(actividad.id)
                  onClose()
                }}
                className="text-red-600 hover:underline"
              >
                Eliminar
              </button>
            )}

            <div className="flex gap-2 ml-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-lg"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
