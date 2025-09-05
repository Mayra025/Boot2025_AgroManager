import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../features/auth/store/authStore";
import { registerService } from "../features/auth/service/authService";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";
import LinkButton from "../components/ui/LinkButton";

export default function Registro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useAuthStore((state) => state.setUser);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user, token } = await registerService(name, email, password);
            setUser(user, token);
            navigate("/inicio");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-96"

            >
                <h1 className="text-2xl font-bold text-green-600 mb-6">Registro</h1>
                <InputField
                    label="Nombre"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                />
                <InputField
                    label="Email*"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                />

                <InputField
                    label="Contraseña*"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                />

                <Button text="Registrar" />

                <LinkButton text="¿Ya tienes cuenta?" to="/" enlace="Inicia Sesión" />
            </form>
        </div>

    );
}
