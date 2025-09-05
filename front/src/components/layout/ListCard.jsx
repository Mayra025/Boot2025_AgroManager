const ListCard = ({ title, subtitle, badge, children, footer }) => (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
            </div>
            {badge}
        </div>

        <div className="mb-4">{children}</div>

        {footer && <div className="border-t border-gray-200 pt-4">{footer}</div>}
    </div>
);

export default ListCard;
