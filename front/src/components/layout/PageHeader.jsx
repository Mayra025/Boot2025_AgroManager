import { Plus } from "lucide-react";

const PageHeader = ({ title, subtitle, buttonText, onButtonClick }) => {
    return (
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
            </div>
            {buttonText && (
                <button
                    onClick={onButtonClick}
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
                >
                    <Plus size={16} />
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default PageHeader;
