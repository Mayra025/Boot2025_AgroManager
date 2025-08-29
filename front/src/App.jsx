import { useState } from "react";
import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Cultivos from "./pages/Cultivos";
import Animales from "./pages/Animales";
import Inventario from "./pages/Inventario";
import Ventas from "./pages/Ventas";

// Wrapper para rutas protegidas
function ProtectedRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route element={<DashboardLayout />}>
            <Route path="inicio" element={<Inicio />} />
            <Route path="cultivos" element={<Cultivos />} />
            <Route path="animales" element={<Animales />} />
            <Route path="inventario" element={<Inventario />} />
            <Route path="ventas" element={<Ventas />} />
          </Route>
        </Route>

        <Route path="*"
          element={<Navigate to={isAuthenticated ? "/inicio" : "/"} replace />}
        />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
