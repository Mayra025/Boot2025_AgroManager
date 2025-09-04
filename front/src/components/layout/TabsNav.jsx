const TabsNav = ({ tabs, activeTab, onChange }) => (
    <div className="flex space-x-8 px-6 border-b border-gray-200 bg-white">
        {tabs.map((tab) => (
            <button
                key={tab}
                onClick={() => onChange(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab
                        ? "border-gray-900 text-gray-900"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
            >
                {tab}
            </button>
        ))}
    </div>
);

export default TabsNav;
