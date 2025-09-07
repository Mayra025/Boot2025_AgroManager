import { useState } from "react";
import TabsNav from "../components/layout/TabsNav";
import PageHeader from "../components/layout/PageHeader";
import CultivoCard from "../features/cultivos/CultivoCard";
import CultivoModal from "../features/cultivos/CultivoModal";
import CultivoDetailModal from "../features/cultivos/CultivoDetailModal";
import ActividadesList from "../features/cultivos/ActividadesList";
import { useCultivosStore } from "../features/cultivos/store/cultivosStore";

export default function Cultivos() {
    const { cultivos } = useCultivosStore();
    const [activeTab, setActiveTab] = useState("Cultivos Activos");
    const [modalOpen, setModalOpen] = useState(false);
    const [detailOpen, setDetailOpen] = useState(false);

    const [selectedCultivo, setSelectedCultivo] = useState(null);

    return (
        <div className="w-full">
            {/* Header */}
            <PageHeader
                title="Gestión de Cultivos"
                subtitle="Administra tus cultivos y actividades agrícolas"
                buttonText="Nuevo Cultivo"
                onButtonClick={() => {
                    setSelectedCultivo(null);
                    setModalOpen(true);
                }} />

            {/* Tabs */}
            <TabsNav
                tabs={["Cultivos Activos", "Actividades"]}
                activeTab={activeTab}
                onChange={setActiveTab}
            />

            {/* Contenido */}
            {activeTab === "Cultivos Activos" ? (
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cultivos.map((c) => (
                        <CultivoCard
                            key={c.id}
                            cultivo={c}
                            onEdit={() => {
                                setSelectedCultivo(c);
                                setModalOpen(true);
                            }}
                            onView={() => {
                                setSelectedCultivo(c);
                                setDetailOpen(true);
                            }}
                        />
                    ))}
                </div>
            ) : activeTab === "Actividades" ? (
                <div className="p-6">
                    <ActividadesList />
                </div>
            ) : null}

            {/* Modal */}
            <CultivoModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                cultivo={selectedCultivo}
            />
            <CultivoDetailModal
                isOpen={detailOpen}
                onClose={() => setDetailOpen(false)}
                cultivo={selectedCultivo}
            />
        </div>
    );
}