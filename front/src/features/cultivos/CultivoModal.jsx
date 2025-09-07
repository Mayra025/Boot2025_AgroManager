import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useCultivosStore } from "./store/cultivosStore";

const CultivoModal = ({ isOpen, onClose, cultivo }) => {
    const { addCultivo, editCultivo } = useCultivosStore();
    const [form, setForm] = useState({
        nombre: "",
        variedad: "",
        estado: { text: "Siembra", color: "bg-blue-100 text-blue-600" },
        parcela: "",
        hectareas: "",
        siembra: "",
        cosecha: "",
        nota: "",
    });

    useEffect(() => {
        if (cultivo) {
            setForm(cultivo);
        }
    }, [cultivo]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cultivo) {
            editCultivo(cultivo.id, form);
        } else {
            addCultivo({ ...form, id: Date.now() });
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {cultivo ? "Editar Cultivo" : "Nuevo Cultivo"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-600">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-black focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Variedad</label>
                        <input
                            type="text"
                            name="variedad"
                            value={form.variedad}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 mt-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Parcela</label>
                        <input
                            type="text"
                            name="parcela"
                            value={form.parcela}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 mt-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Hectáreas</label>
                        <input
                            type="number"
                            step="0.1"
                            name="hectareas"
                            value={form.hectareas}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 mt-1"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-600">Siembra</label>
                            <input
                                type="date"
                                name="siembra"
                                value={form.siembra}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600">Cosecha</label>
                            <input
                                type="date"
                                name="cosecha"
                                value={form.cosecha}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 mt-1"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Nota</label>
                        <textarea
                            name="nota"
                            value={form.nota}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 mt-1"
                            rows={2}
                        />
                    </div>

                    {/* Botón */}
                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                        >
                            {cultivo ? "Guardar Cambios" : "Crear Cultivo"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CultivoModal;
