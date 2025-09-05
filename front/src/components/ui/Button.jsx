export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
    >
      {text}
    </button>
  );
}
