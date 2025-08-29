import { Logo } from "../Logo";
import { NavLink } from "react-router-dom";
import { House, Sprout, Dog, Tractor, CircleDollarSign } from 'lucide-react';

const menuItems = [
    { name: 'Inicio', to: '/inicio', icon: <House size={20} /> },
    { name: 'Cultivos', to: '/cultivos', icon: <Sprout size={20} /> },
    { name: 'Animales', to: '/animales', icon: <Dog size={20} /> },
    { name: 'Inventario', to: '/inventario', icon: <Tractor size={20} /> },
    { name: 'Ventas', to: '/ventas', icon: <CircleDollarSign size={20} /> },
];

export const SideBar = () => {
    return (
        <aside className="w-64 h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">
            <Logo></Logo>
            <nav className="flex-1 space-y-1 py-4">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-6 py-2 text-sm font-medium rounded-lg transition
          ${isActive ? 'bg-green-700 text-white' : 'text-gray-700 hover:bg-gray-100'}`
                        }
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>
        </aside >
    );
}