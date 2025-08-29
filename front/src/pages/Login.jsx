import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 
    onLogin();           // marca al usuario como autenticado
    navigate("/inicio"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80 p-6 bg-white rounded shadow"
      >
        <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="border p-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="border p-2 rounded"
          required
        />

        <button className="bg-green-700 text-white py-2 rounded hover:bg-green-800">
          Entrar
        </button>
      </form>
    </div>
  );
}
