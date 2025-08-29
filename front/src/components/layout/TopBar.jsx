import { LogOut } from "lucide-react";

export const TopBar = () => {
    const Logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }
    return (
        <header className="flex justify-between items-center px-6 py-3 bg-white border-b border-gray-200 shadow-sm">
            <h1 className="text-lg font-semibold text-black">AgroManager</h1>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-xl">

                    <span className="text-sm cursor-pointer"
                        onClick={Logout}> <LogOut></LogOut>Salir</span>

                </div>
            </div >

        </header>
    );
}