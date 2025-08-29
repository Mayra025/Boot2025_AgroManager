import { Outlet } from "react-router-dom";
import { SideBar } from "../components/layout/SideBar";
import { TopBar } from "../components/layout/TopBar";

export default function DashboardLayout({}) {

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />

      {/* Main */}
      <div className="flex flex-col flex-1">
        {/* TopBar */}
        <TopBar />

        {/* Contenido */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet/>

        </main>
      </div>
    </div>
  );
}
