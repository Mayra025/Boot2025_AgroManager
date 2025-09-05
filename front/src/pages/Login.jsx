import AuthForm from "../features/auth/AuthForm";
import Logo from "../components/ui/Logo";

export default function Login() {

  return (
    <div className="flex min-h-screen">
      {/* Lado Izquierdo: Formulario */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">

          <AuthForm
          ></AuthForm>
        </div>
      </div>

      {/* Lado Derecho: Imagen/Logo */}
      <div className="hidden md:flex w-1/2 bg-black items-center justify-center">
        {/* <img
          src="/agromanager-banner.png"
          alt="AgroManager"
          className="max-w-lg"
        /> */}
        <Logo></Logo>
      </div>
    </div>
  );
}
