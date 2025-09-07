import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore";
import { loginService } from "./service/authService";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/InputField";
import LinkButton from "../../components/ui/LinkButton";

export default function AuthForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useAuthStore((state) => state.setUser);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        // e.preventDefault();
        // console.log({ email, password }); // backend (Express/Mongo)
        // onLogin();           // marca al usuario como autenticado
        // navigate("/inicio");

        e.preventDefault();
        try {
            const { user, token } = await loginService(email, password);
            setUser(user, token);
            navigate("/inicio");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h1 className="text-2xl font-bold text-green-600 mb-6">Iniciar sesión</h1>
            <p className="text-sm text-gray-500 mb-6">Ingresa tu email y contraseña para ingresar.</p>

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

            <Button text="Ingresar" />

            <LinkButton text="No tienes una cuenta?" to="/registro" enlace="Regístrate" />
        </form>
    );
}
