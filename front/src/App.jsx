import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Cultivos from "./pages/Cultivos";
import Animales from "./pages/Animales";
import Inventario from "./pages/Inventario";
import Ventas from "./pages/Ventas";
import { useAuthStore } from "./features/auth/store/authStore";
import Registro from "./pages/Registro";

// Wrapper para rutas protegidas
function ProtectedRoute() {
  const { isAuthenticated, loadUser } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

function App() {

  const { isAuthenticated } = useAuthStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Login />}
        />
        <Route path="/registro" element={<Registro />} />


        <Route element={<ProtectedRoute />}>
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