const InfoCard = ({ title, value, description, icon }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center justify-between">
            <div>
                <p className="text-gray-600 text-sm">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                {description && (
                    <p className="text-gray-500 text-sm mt-1">{description}</p>
                )}
            </div>
            {icon && <div className="bg-gray-100 p-3 rounded-full">{icon}</div>}
        </div>
    );
};

export default InfoCard;
