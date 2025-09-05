import { Link } from "react-router-dom";

export default function LinkButton({ text, to, enlace }) {
  return (
    <p className="text-sm mt-4 text-gray-600">
      {text}{" "}
      <Link to={to} className="text-green-600 font-semibold hover:underline">
        {enlace}
      </Link>
    </p>
  );
}
